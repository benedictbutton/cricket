# -*- encoding: utf-8 -*-
# stub: valid_attribute 2.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "valid_attribute".freeze
  s.version = "2.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Brian Cardarella".freeze]
  s.date = "2014-08-10"
  s.description = "Minimalist validation matcher".freeze
  s.email = ["bcardarella@gmail.com".freeze]
  s.homepage = "https://github.com/bcardarella/valid_attribute".freeze
  s.rubygems_version = "3.4.10".freeze
  s.summary = "Minimalist validation matcher".freeze

  s.installed_by_version = "3.4.10" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_development_dependency(%q<rake>.freeze, [">= 0"])
  s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
  s.add_development_dependency(%q<mocha>.freeze, [">= 0"])
  s.add_development_dependency(%q<minitest>.freeze, [">= 0"])
  s.add_development_dependency(%q<minitest-matchers>.freeze, [">= 0"])
end
