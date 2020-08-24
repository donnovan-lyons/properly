# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Faker::Config.locale = 'en-US'

users = User.create(first_name: 'Donnovan', last_name: 'Lyons', email: 'donnovan.lyons@gmail.com', username: 'donnovan', password: 'password', password_confirmation: 'password', bio: 'Future entrepreneur', avatar: avatar = Faker::Avatar.image)

99.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    email =  Faker::Internet.unique.free_email
    username = Faker::Internet.unique.username
    password = Faker::Internet.password
    bio = Faker::TvShows::SiliconValley.quote
    avatar = Faker::Avatar.image
    User.create(first_name: first_name, last_name: last_name, email: email, username: username, password: password, password_confirmation: password, bio: bio, avatar: avatar)
end

50.times do
    house_number = Faker::Address.building_number
    street = Faker::Address.street_name
    city = Faker::Address.city
    state = Faker::Address.state
    zip = Faker::Address.zip_code
    Address.create(house_number: house_number, street: street, city: city, state: state, zip: zip, country: 'USA')
end

75.times do |count|
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    email =  Faker::Internet.unique.email
    phone = Faker::PhoneNumber.unique.cell_phone.delete('^0-9').to_i
    if count <= 49 
        Address.find(count+1).landlords.create(first_name: first_name, last_name: last_name, email: email, phone: phone)
    else
        Address.find(rand(1..50)).landlords.create(first_name: first_name, last_name: last_name, email: email, phone: phone)
    end
end

100.times do |count|
    title = Faker::Hipster.sentence(word_count: 2, supplemental: false, random_words_to_add: 4)
    review = Faker::Hipster.paragraph
    rating = rand(1..6)
    if count <= 74
        User.find(count+1).reviews.create(title: title, review: review, rating: rating, landlord_id: count+1)
    else
        User.find(count).reviews.create(title: title, review: review, rating: rating, landlord_id: rand(1..75))
    end
end