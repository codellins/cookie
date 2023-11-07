const codellins = {

    Cookies: {
        
        set: function (name, value, days) {
    
        const expirationDate = new Date();

        expirationDate.setDate(expirationDate.getDate() + days ? days : 100);

        const expires = `expires=${expirationDate.toUTCString()}`

        document.cookie=`${name}=${value};${expires}; path=/`

        },
        get: function (cookieName) {

                const cookies = document.cookie.split("; ");
            
                for (const cookie of cookies) {

                    const [name, value] = cookie.split("=");
                    
                if (name === cookieName) {
                    
                    return decodeURIComponent(value);
                }
        }
        
        return null
            

        },
        remove: function (name) {

        const expires = `expires=Thu, 01 Jan 1970 00:00:00 UTC`

        document.cookie=`${name}=;${expires}; path=/`

        }

    },
    Clipboard: {

        write: async function (text) {

        await navigator.clipboard.writeText(text)
        
        },
        read: async function () {
            
            await navigator.clipboard.readText()
        }


    }

   
    

}
