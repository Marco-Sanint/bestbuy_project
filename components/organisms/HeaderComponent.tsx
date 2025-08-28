
export default function HeaderComponent() {
  return (
    <header className="w-full flex flex-col bg-[#131921]">
      <section className="w-full max-w-[1500px] mx-auto flex items-center">
        <section className="w-full">
          <picture>
            <img
              src="https://t3.ftcdn.net/jpg/03/99/04/82/360_F_399048295_bQCz5V7M2QZVnuv07lwHuMiQsR4X6o7X.jpg" 
              alt="Icono de amazon"
              title="Amazon es el mejor y mas caro"
              height="50"
              width="100"
            />
          </picture>
        </section>
        <section className="w-[100px] flex items-center gap-[10px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="9" r="2.5" fill="#fff"/><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z"/></svg>
          <div className="flex flex-col text-white">
            <span className="text-[12px] font-semibold">Enviar a</span>
            <span className="text-[14px] font-bold">Colombia</span>
          </div>
        </section>
        <section className="w-[calc(100%-610px)] h-10 flex items-center">
          <select className="h-full w-[100px] bg-[#b3b3b3]" name="" id="">
            <option value="">Todos</option>
            {/* @for (item of listItems(); track item.id) {
              <option [value]="item.id"></option>
            } */}
          </select>
          <input className="h-full w-[calc(100-140px)] p-2.5 border-none outline-0 bg-white" type="text" />
          <div className="h-full w-[40px] bg-[#febd69] flex justify-center items-center rounded-r-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"><path d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z"/><path d="M10.5 13.5l-7.5 7.5"/></g></svg>
          </div>
        </section>
        <section className="header__superior--flag">
          <span>
            ES
          </span>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M12 15l-5 -5M12 15l5 -5"/></svg> */}
        </section>
        <section className="header__superior--auth">
          <div>
            <span>Hola, identificate</span>
            <span>Cuenta y listas</span>
          </div>
          <div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M12 15l-5 -5M12 15l5 -5"/></svg> */}
          </div>
        </section>
        <section className="header__superior--refunds">
          <span>Devoluciones</span>
          <span>y pedidos</span>
        </section>
        <section className="header__superior--cart">
          <div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"><path d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"/><path d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"/></g></svg> */}
          </div>
          <div>
            <span>Carrito</span>
          </div>
        </section>
      </section>
      <section className="header__inferior">
        <section>
          <p>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-dasharray="8" stroke-dashoffset="8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"><path d="M12 5h6M12 5h-6" stroke-dashoffset="0"/><path d="M12 10h6M12 10h-6" stroke-dashoffset="0"/><path d="M12 15h6M12 15h-6" stroke-dashoffset="0"/><path d="M12 20h6M12 20h-6" stroke-dashoffset="0"/></g></svg> */}
            Todo
          </p>
          <p>Prime</p>
          <p>Prime video</p>
          <p>Ofertas del Día</p>
          <p>Listas</p>
          <p>Servicio al Cliente</p>
          <p>Tarjetas de Regalo</p>
          <p>Vender</p>
        </section>
      </section>
    </header>
  )
}