class InterviewersController < ApplicationController
  before_action :set_interviewer, only: [:show, :update, :destroy]

  # GET /interviewers
  def index
    @interviewers = Interviewer.all

    render json: @interviewers
  end

  # GET /interviewers/1
  def show
    render json: @interviewer
  end

  # POST /interviewers
  def create
    @interviewer = Interviewer.new(interviewer_params)

    if @interviewer.save
      render json: @interviewer, status: :created, location: @interviewer
    else
      render json: @interviewer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /interviewers/1
  def update
    if @interviewer.update(interviewer_params)
      render json: @interviewer
    else
      render json: @interviewer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /interviewers/1
  def destroy
    @interviewer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_interviewer
      @interviewer = Interviewer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def interviewer_params
      params.require(:interviewer).permit(:id, :name, :email)
    end
end
