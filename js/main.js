document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng


    // xử lý sự kiện để show sub menu
    function handleShowSubMenu() {
        
        const subMenu = document.querySelector(".js__subMenu");

        if (!subMenu) return;

        var closeSubMenu = subMenu.querySelector(".js__closeSubMenu");
        var overlay = subMenu.querySelector(".js__overlay");
        var showSubMenu = subMenu.querySelector(".js__showSubmenu");

        showSubMenu.onclick = function () {
            subMenu.classList.add("active");
            document.querySelector("body").style.overflow = "hidden";
        };
        closeSubMenu.onclick = function () {
            subMenu.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
        overlay.onclick = function () {
            subMenu.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
    }
    // xử lý sự kiện để show dropdown
    function handleShowDropdown() {
        
        const dropdownContainers = document.querySelectorAll(".js__dropdownContainer");


        if (dropdownContainers.length === 0) return;


        dropdownContainers.forEach((dropdownContainer)=>{

            const dropdown = dropdownContainer.querySelector(".js__showDropdown");
            const dropdownContent = dropdownContainer.querySelector(".js__dropdownContent");
            const overlay = dropdownContainer.querySelector(".js__overlay");


            dropdown.onclick = function () {
                dropdownContent.classList.toggle("active");
                overlay.classList.add('active')

            };

            overlay.onclick = function () {
                dropdownContent.classList.remove("active");
                this.classList.remove("active");
            };
        })

      
    }

    // xử lý sự kiện để show popupLogin
    function handleShowPopupLogin() {
        const showPopupLogins = document.querySelectorAll(".js__showPopupLogin");
        const popupLoginContainer = document.querySelector(".js__popupLoginContainer");
        
        const popupLogin = popupLoginContainer.querySelector(".js__popupLogin");
        const closePopupLogin = popupLoginContainer.querySelector(".js__closePopupLogin");
        const overlay = popupLoginContainer.querySelector(".js__overlay");
        



        if (showPopupLogins.length === 0) return;

        showPopupLogins.forEach((showPopupLogin)=>{
            showPopupLogin.onclick = function() {
                popupLogin.classList.add('active')
                overlay.classList.add('active')
                document.querySelector("body").style.overflow = "hidden";
            }

            closePopupLogin.onclick = function () {
                document.querySelector("body").style.overflow = "auto";
                popupLogin.classList.remove('active')
                overlay.classList.remove('active')
            };

            overlay.onclick = function () {
                this.classList.remove("active");
                document.querySelector("body").style.overflow = "auto";
                popupLogin.classList.remove('active')
            };
        })
        
    }



    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleShowPopupLogin();
        handleShowSubMenu();
        handleShowDropdown();
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});
