FactoryGirl.define do
  factory :user do
    sequence :email do |n|
      "#{Faker::Internet.email}#{n}"
    end
    password Faker::Internet.password
    first_name Faker::Name.first_name
    last_name Faker::Name.last_name
    sequence :username do |n|
      "#{Faker::Internet.user_name}#{n}"
    end
    avatar Faker::Avatar.image
  end
end
