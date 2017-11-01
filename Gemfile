source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

  gem 'pg', '~> 0.18.4'
  gem 'rails', '~> 5.1.0'
  gem 'puma', '~> 3.7'
  gem 'sass-rails', '~> 5.0'
  gem 'jquery-rails'
  gem 'jbuilder', '~> 2.5'
  gem 'uglifier', '>= 1.3.0'
  gem 'devise'
  gem 'foundation-rails', "6.3.0.0"
  gem 'httparty'
  gem 'carrierwave'
  gem 'fog'
  gem 'fog-aws'
  gem 'mini_magick'

group :test do
  gem 'coveralls', require: false
end

group :development, :test do
  gem 'capybara', '~> 2.13.0'
  gem 'selenium-webdriver'
  gem 'factory_girl_rails'
  gem 'launchy', require: false
  gem 'pry-rails'
  gem 'rspec-rails', '~> 3.5'
  gem 'shoulda-matchers', require: false
  gem 'valid_attribute'
  gem 'dotenv-rails'
  gem 'faker'
  gem 'derailed'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
