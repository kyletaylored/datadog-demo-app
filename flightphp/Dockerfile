# 1. Start from the PHP 8.3 Apache image
FROM php:8.3-apache

# 2. Install system dependencies needed for Composer (e.g., git, zip, unzip)
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# 3. Copy Composer from the official Composer image (v2)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# 4. Install any PHP extensions you may need (example: pdo_mysql for DB usage)
RUN docker-php-ext-install pdo_mysql

# 5. Enable Apache mod_rewrite if using pretty URLs
RUN a2enmod rewrite

# 6. Configure the document root to point to `public/` (FlightPHP’s typical entry point)
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

# 7. Update Apache config for new doc root and allow .htaccess overrides if needed
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/000-default.conf
RUN sed -ri -e 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf

# 8. Set up the working directory and copy in your application code
WORKDIR /var/www/html

# If your composer.json is in the same directory as Dockerfile, copy it first
COPY composer.json composer.lock ./

# 9. Install dependencies in a separate layer
RUN composer install --no-dev --prefer-dist --optimize-autoloader

# 10. Copy the rest of your app’s files (including Flight code, public/, views/, etc.)
COPY . /var/www/html

# 11. Expose the default HTTP port
EXPOSE 80

# Setup Datadog
RUN curl -LO https://github.com/DataDog/dd-trace-php/releases/latest/download/datadog-setup.php
RUN php datadog-setup.php --php-bin=all --enable-appsec --enable-profiling

# 12. Start Apache
CMD ["apachectl", "-D", "FOREGROUND"]
