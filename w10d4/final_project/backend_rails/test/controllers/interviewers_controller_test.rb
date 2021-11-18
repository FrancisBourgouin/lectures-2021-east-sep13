require "test_helper"

class InterviewersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @interviewer = interviewers(:one)
  end

  test "should get index" do
    get interviewers_url, as: :json
    assert_response :success
  end

  test "should create interviewer" do
    assert_difference('Interviewer.count') do
      post interviewers_url, params: { interviewer: { email: @interviewer.email, id: @interviewer.id, name: @interviewer.name } }, as: :json
    end

    assert_response 201
  end

  test "should show interviewer" do
    get interviewer_url(@interviewer), as: :json
    assert_response :success
  end

  test "should update interviewer" do
    patch interviewer_url(@interviewer), params: { interviewer: { email: @interviewer.email, id: @interviewer.id, name: @interviewer.name } }, as: :json
    assert_response 200
  end

  test "should destroy interviewer" do
    assert_difference('Interviewer.count', -1) do
      delete interviewer_url(@interviewer), as: :json
    end

    assert_response 204
  end
end
