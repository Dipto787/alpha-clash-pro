

    function hideElementById(event){
        const hideElementId=document.getElementById(event);
        hideElementId.classList.add('hidden');
    }

    function showElementById(event){
        const showElementId=document.getElementById(event);
        showElementId.classList.remove('hidden');
    }

    function addBackgroundColor(byid){
        const set=document.getElementById(byid);
        set.classList.add('bg-red-500');
    }