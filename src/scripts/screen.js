

function devLog(logi){
    console.log(logi)

}

function atStart(){

}

function change_menu_state(menu_name, state){
    
    switch (menu_name) {
        case "setting-menu":
            const page_settings = document.getElementById("settings-menu");
            page_settings.style.display = state
        break;
        case "user-menu":
            const page_user = document.getElementById("user-menu");
            page_user.style.display = state
        break;
        case "about-menu":
            const page_about = document.getElementById("about-menu");
            page_about.style.display = state
        break;
        case "power-menu":
            const page_power = document.getElementById("power-menu");
            page_power.style.display = state
        break;
    }
}

function set_power_state(power_type){
    switch (power_type){
        case "sleep":
            goSleep()
        break;
    }
}


async function goSleep() {
  const cmd = new Command("systemctl", ["suspend"]);
  await cmd.execute();
}

function open_external(){shell.open("firefox https://www.youtube.com/")}