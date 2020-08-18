class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :review
end
