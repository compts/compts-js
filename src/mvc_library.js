var controller_library = (function(property){


    return {
        
    }    
})


var controller_utitlities = {
    dom_template_cleanup:function(temp){
        temp = temp.replace(/(<!--)/g,"<!")
        temp = temp.replace(/(!-->)/g,"!>")
        return temp;
    }
}