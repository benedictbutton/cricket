# -*- encoding: utf-8 -*-
# stub: fog-dnsimple 2.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "fog-dnsimple".freeze
  s.version = "2.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Simone Carletti".freeze]
  s.bindir = "exe".freeze
  s.date = "2018-02-20"
  s.description = "This library can be used as a module for `fog` or as standalone provider\n                        to use the DNSimple in applications.".freeze
  s.email = ["weppos@weppos.net".freeze]
  s.homepage = "https://github.com/fog/fog-dnsimple".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.1".freeze)
  s.rubygems_version = "3.4.10".freeze
  s.summary = "Module for the 'fog' gem to support DNSimple.".freeze

  s.installed_by_version = "3.4.10" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_development_dependency(%q<bundler>.freeze, ["~> 1.12"])
  s.add_development_dependency(%q<rake>.freeze, ["~> 12.0"])
  s.add_development_dependency(%q<minitest>.freeze, [">= 0"])
  s.add_development_dependency(%q<minitest-reporters>.freeze, [">= 0"])
  s.add_runtime_dependency(%q<fog-core>.freeze, [">= 1.38", "< 3"])
  s.add_runtime_dependency(%q<fog-json>.freeze, [">= 0"])
end