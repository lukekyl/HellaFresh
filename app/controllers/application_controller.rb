class ApplicationController < ActionController::API

    def index
        redirect_to :file => 'frontend/index.html'
    end

end
