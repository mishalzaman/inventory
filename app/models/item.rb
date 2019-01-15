class Item < ApplicationRecord
  enum state: [:in_stock, :running_out, :out_of_stock]

  # name
  # user_id
  # state
end
