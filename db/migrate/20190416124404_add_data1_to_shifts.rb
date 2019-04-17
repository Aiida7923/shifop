class AddData1ToShifts < ActiveRecord::Migration[5.2]
  def change
    add_column :shifts, :data, :data
  end
end
