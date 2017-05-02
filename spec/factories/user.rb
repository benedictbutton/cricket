FactoryGirl.define do
  factory :user do
    first_name Faker::Name.first_name
    last_name Faker::Name.last_name
    avatar Faker::Avatar.image
    password Faker::Internet.password
    sequence :email do |n|
      "#{Faker::Internet.email}#{n}"
    end
    sequence :username do |n|
      "#{Faker::Internet.user_name}#{n}"
    end
  end
end
