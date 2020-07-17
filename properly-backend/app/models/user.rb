class User < ApplicationRecord
    has_secure_password
    validates :email, :password,  presence: true
    validates :email, uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
    validates :username, uniqueness: { case_sensitive: false }
end
