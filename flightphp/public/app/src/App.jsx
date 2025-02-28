import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Form, FormControl, Button, Row, Col, Card, Badge, Stack } from "react-bootstrap";
import { datadogRum } from '@datadog/browser-rum/esm/entries/main';
import { datadogLogs } from '@datadog/browser-logs/esm/entries/main';
import datadogRumInterceptor from '@kyletaylored/datadog-rum-interceptor';

// Init Datadog RUM Interceptor
const DRI = datadogRumInterceptor.init({ debug: true });

// Init Datadog logs.
datadogLogs.init({
  clientToken: 'pub067eb57994325a05bf401b11a686e8e3',
  site: 'datadoghq.com',
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
})

// Initialize Datadog RUM
datadogRum.init({
  clientToken: 'pub067eb57994325a05bf401b11a686e8e3',
  applicationId: '4a79b017-ea18-4839-9153-ce2b058b4db6',
  // `site` refers to the Datadog site parameter of your organization
  // see https://docs.datadoghq.com/getting_started/site/
  site: 'datadoghq.com',
  service: 'datadog-demo-app',
  env: 'local',
  // Specify a version number to identify the deployed version of your application in Datadog
  version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
  allowedTracingUrls: [
    (url) => {
      console.log("allowedTracingUrls", { url });
      return url.includes('localhost')
    }
  ],

  beforeSend: (event, context) => {
    // collect a RUM resource's response headers
    // console.log("pre-resource check", { event, context });
    if (event.type === 'resource' && ['xhr', 'fetch'].includes(event.resource.type)) {
      console.log("post-resource check", { event, context });
      const data = DRI.getPayload({ event, context });
      console.log("beforeSend", { data });
      // if (data) {

      //   // Add payload to event context.
      //   event.context.payload = data;

      //   // Optionally, send to logs.
        datadogLogs.logger.log(data);
      // }
    }
    return true;
  },
});

// const DRI = datadogRumInterceptor.init({ debug: true });

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [products, setProducts] = useState([]);
  const [response, setResponse] = useState(null);
  const [session, setSession] = useState(null);

  const handleApiCall = async (method, url, body = null) => {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
    };
    if (body) options.body = JSON.stringify(body);

    try {
      const res = await fetch(url + (url.includes("?") ? "&" : "?") + (session ? `session=${session}` : ""), options);

      const resClone = res.clone();
      
      const data = await res.json();

      if (url === "/api/login" && data.user?.session) {
        setSession(data.user.session);
      }

      setResponse({
        status: res.status,
        url,
        body: JSON.stringify(data, null, 2),
      });
    } catch (error) {
      setResponse({
        status: "Error",
        url,
        body: error.message,
      });
    }
  };

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      fetch(`/api/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch((error) => console.error("Error fetching search results:", error));
    } else {
      setSuggestions([]);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex position-relative">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {suggestions.length > 0 && (
              <div className="position-absolute bg-white border rounded p-2" style={{ top: "100%", left: 0, width: "100%", zIndex: 10 }}>
                {suggestions.map((item, index) => (
                  <div key={index} className="p-1 border-bottom">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </Form>
          <Button variant="outline-light" className="ms-2">Login</Button>
        </Navbar.Collapse>
      </Navbar>

      {/* API Playground */}
      <Container className="my-4">
        <Row>
          <Col md={4}>
            <Button className="mb-2 w-100" onClick={() => handleApiCall("POST", "/api/login", { email: "test@example.com", password: "password" })}>
              Login
            </Button>
            <Button className="mb-2 w-100" onClick={() => handleApiCall("GET", "/api/user")}>Get User</Button>
            <Button className="mb-2 w-100" onClick={() => handleApiCall("GET", "/api/jwt")}>Get JWT</Button>
            <Button className="mb-2 w-100" onClick={() => handleApiCall("GET", "/api/products")}>Get Products</Button>
            <Button className="mb-2 w-100" onClick={() => handleApiCall("GET", "/api/products/1")}>Get Product 1</Button>
            <Button className="mb-2 w-100" onClick={() => handleApiCall("GET", "/api/search?q=chair")}>Search Products</Button>
            <Button className="mb-2 w-100" onClick={() => handleApiCall("GET", "http://localhost:3001/api/fast?type=axios&sleep=8")}>Chain API (Axios)</Button>
            <Button className="mb-2 w-100" onClick={() => handleApiCall("GET", "http://localhost:3001/api/fast?type=http&sleep=10")}>Chain API (HTTP)</Button>
            <Button className="mb-2 w-100" onClick={() => handleApiCall("GET", "http://localhost:3001/api/fast?type=fetch&sleep=12")}>Chain API (Fetch)</Button>
          </Col>
          <Col md={8}>
          <div>
          {response ? (
            <Container>
            <Stack direction="horizontal" gap={3} className='pb-3'>
            <Badge pill bg="primary">Status: {response.status}</Badge>
            <Badge pill bg="secondary">URL: {response.url}</Badge>
            </Stack>
              <pre className="border p-3 bg-light" style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
              <code>
                <>
                  <strong>Body:</strong> {response.body}
                </>
                </code>
                </pre>
                </Container>
              ) : (
                <pre className='well'>"Click a button to make an API request"</pre>
              )
              }
            </div>
          </Col>
        </Row>
      </Container>

      {/* Jumbotron Banner */}
      <div className="bg-primary text-white text-center py-5">
        <h1>Welcome to Our Store</h1>
        <p>Find the best products at unbeatable prices.</p>
        <Button variant="light" className="m-2">Shop Now</Button>
        <Button variant="outline-light">Learn More</Button>
      </div>

      {/* Product Grid */}
      <Container className="my-4">
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={`https://picsum.photos/300/200?random=${product.id}`} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <h5>${product.price}</h5>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p>© 2025 Your Store | <a href="#privacy" className="text-white">Privacy Policy</a> | <a href="#terms" className="text-white">Terms of Service</a></p>
        </Container>
      </footer>
    </>
  );
};

export default App;
