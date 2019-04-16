class CreateShifts < ActiveRecord::Migration[5.2]
  def change
    create_table :shifts do |t|
      t.time :start
      t.time :end

      t.timestamps
    end
  end
end
