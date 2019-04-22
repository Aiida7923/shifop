class Shift < ActiveRecord::Migration[5.2]
  def change
    drop_table :shifts
  end
end
