source 'https://rubygems.org'
ruby "3.1.4"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

group :test do
  gem 'coveralls', require: false
end

group :development, :test do
  gem 'capybara', '~> 2.13.0'
  gem 'derailed'
  gem 'dotenv-rails'
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'launchy', require: false
  gem 'pry-rails'
  gem 'rspec-rails', '~> 3.5'
  gem 'selenium-webdriver'
  gem 'shoulda-matchers', require: false
  gem 'valid_attribute'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'carrierwave'
gem 'devise', '>= 4.6.0'
gem 'ovirt-engine-sdk', '~> 4.2', '>= 4.2.4'
gem 'fog'
gem 'fog-aws'
gem 'foundation-rails', '6.3.0.0'
gem 'httparty'
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'mini_magick'
gem 'omniauth-google-oauth2'
gem 'psych', '< 4'
gem 'puma', '~> 3.7'
gem 'rails', '~> 6.0.2'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

gem "pg", "~> 1.2.3"
