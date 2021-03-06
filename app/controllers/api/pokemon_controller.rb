class Api::PokemonController < ApplicationController
  def root

  end

  def index
    @pokemons = Pokemon.all
  end

  def show
    @pokemon = Pokemon.includes(:items).find(params[:id])
  end

  def create

  end

  def update

  end

  def destroy

  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end

end
