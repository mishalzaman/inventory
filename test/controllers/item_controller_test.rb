require 'test_helper'

class ItemControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get item_index_url
    assert_response :success
  end

  test "should get add" do
    get item_add_url
    assert_response :success
  end

  test "should get edit" do
    get item_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get item_destroy_url
    assert_response :success
  end

end
