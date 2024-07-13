import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from "lucide-react";
import { useState } from "react";

export const App = () => {

  const [isGuestInputOpen, setIsGuestOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  
  const toggleGuestInput = () => setIsGuestOpen(!isGuestInputOpen);
  const toggleGuestModal = () => setIsGuestModalOpen(!isGuestModalOpen);
  
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10 shadow-shape gap-3">

        <div className="flex flex-col items-center justify-center gap-2">
          <img src="./logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center">

            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400"/>
              <input type="text" placeholder="Para onde você vai?" disabled={isGuestInputOpen} className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400"/>
              <input type="text" placeholder="Quando?"disabled={isGuestInputOpen} className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"/>
            </div>

            { isGuestInputOpen ? 
              (
                <button 
                  type="button" 
                  className="flex items-center gap-2 bg-zinc-800 r text-zinc-200 rounded-lg px-5 py-2 font-medium hover:bg-zinc-700"
                  onClick={toggleGuestInput}
                  >
                    Alterar local/data
                  <Settings2 className="size-5"/>
                </button>
              ) : 
              (
                <button 
                  type="button" 
                  className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
                  onClick={toggleGuestInput}
                  >
                    Continuar
                  <ArrowRight className="size-5"/>
                </button>
              ) 
            }
          </div>

          { isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center">

              <button type="button" onClick={toggleGuestModal} className="flex items-center gap-2 flex-1 justify-center">
                <UserRoundPlus className="size-5 text-zinc-400"/>
                <span className="text-zinc-400 text-lg flex-1 text-left"> Quem estará na viagem? </span>
              </button>

              <button 
                type="button" 
                className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
              >
                Confirmar viagem
                <ArrowRight className="size-5"/>
              </button>
            </div>
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br/> 
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.
        </p>
      </div>

      { isGuestModalOpen && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900">
            <h2>Selecionar convidados</h2>

          </div>
        </div>
      )}  
    </div>  
  )
}