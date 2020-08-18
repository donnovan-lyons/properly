# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{ first_name: 'Donnovan', last_name: 'Lyons', email: 'donnovan.lyons@gmail.com', username: 'donnovan', password: 'password', password_confirmation: 'password', bio: 'Future entrepreneur' }, { first_name: 'Jack', last_name: 'Brown', email: 'jbrown@gmail.com', username: 'jacktheman', password: 'password', password_confirmation: 'password', bio: 'Action star' }])

Address.create([{street: '145 Crary Ave', city: 'Binghamton', state: 'NY', zip: '13905', country: 'USA'}])

Address.first.landlords.create([{ first_name: 'John', last_name: 'Ar-bab'}, { first_name: 'Pierre', last_name: 'Ar-bab'}])

User.first.reviews.create(title: "Worst Landlord Ever", review: "This guy didn't help with anything, and didn't return security deposit", rating: 2, landlord_id: 1)