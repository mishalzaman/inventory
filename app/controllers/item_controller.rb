class ItemController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def add
    item_new = Item.new(item_params)
    saved = item_new.save

    render :json => {'success': saved}
  end

  def edit
  end

  def get_items
    items = Item.where({user_id: params[:user_id]})

    render :json => {items: items}
  end

  def destroy
  end

  private

  def item_params
    params.require(:item).permit(:name, :user_id, :state)
  end
end
