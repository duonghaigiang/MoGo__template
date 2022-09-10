const getMenuBar = document.querySelector(".header__nav-bar-moblie")
const getModalbar =document.querySelector(".modal-bar-moblie")
const getContainerBar =document.querySelector(".container-bar-moblie")
const getClose = document.querySelector(".close-modal-moblie")
getMenuBar.addEventListener("click",function()
{
    getModalbar.classList.add("active")
})
getClose.addEventListener("click",function()
{
    getModalbar.classList.remove("active") 
})
document.addEventListener("click", handClick)
function handClick(event)
{
    if(!getContainerBar.contains(event.target) && !event.target.matches(".header__nav-bar-moblie-icon"))
    {
        getModalbar.classList.remove("active") 
    } 
}

const content__develop__body = document.querySelectorAll(".content__develop__description")
const ArrayContent__develop__body = [...content__develop__body]
function clickShow()
{
    ArrayContent__develop__body.forEach(function(item)
    {
        item.addEventListener("click",function(event)
        {
            if(event.currentTarget.nextElementSibling.matches(".is-show"))
            {
             const nextElement = event.currentTarget.nextElementSibling
             nextElement.classList.toggle("is-show")
             const icon = event.currentTarget.querySelector(".content__develop__description__heading__icon")
             icon.classList.toggle("fa-angle-down")
             icon.classList.toggle("fa-angle-up")
            }
            else
            {
                ArrayContent__develop__body.forEach(function(item)
                        {
                            item.nextElementSibling.classList.remove("is-show")
                            item.firstElementChild.lastElementChild.classList.remove("fa-angle-up")
                            item.firstElementChild.lastElementChild.classList.add("fa-angle-down")

                        })
                        const nextElement = event.currentTarget.nextElementSibling
                        nextElement.classList.toggle("is-show")
                        const icon = event.currentTarget.querySelector(".content__develop__description__heading__icon")
                        icon.classList.toggle("fa-angle-down")
                        icon.classList.toggle("fa-angle-up")
            }
        })
    })

}
clickShow()

{/*  */}


const getImage = document.querySelectorAll(".content__product")
const ArayImage = [...getImage]
const getSrc = document.querySelectorAll(".content__product img")
const ArraySrc = [...getSrc]
const getimg = document.querySelector(".light-box img")
const getModal = document.querySelector(".modal")
const getoverlay = document.querySelector(".modal__overlay")
const getNext =document.querySelector(".light-box__next")
const getBack =document.querySelector(".light-box__back")
let i =0
const templeta =`.modal__body{
    animation:tranferImg 0.4s linear;
}`
ArayImage.forEach(function(item)
{
    item.addEventListener("click",function(event)
    {
        const src =  event.currentTarget.firstElementChild.getAttribute("src")
        getimg.setAttribute("src",src)
        getModal.classList.add("active")
        getModal.addEventListener("click",function(event)
        {
            if(event.target.matches(".modal__overlay") && !event.target.matches(".modal i"))
            {
                getModal.classList.remove("active")
            }
            else if(event.target.matches(".light-box__next"))
            {
                tranferImg()
                i = ArraySrc.findIndex(function(item)
                {
                   const getSrcLight = getimg.getAttribute("src")
                   return item.getAttribute("src") === getSrcLight 
                   // đối chiếu xem nó có bằng không nếu bằng thì nó tìm ra được vị trí index đó
                })
                i ++
                if(i === 3)
                {
                    i = 0
                }
               const NextImg= ArraySrc[i].getAttribute("src")
               getimg.setAttribute("src",NextImg)

            }
            else if(event.target.matches(".light-box__back"))
            {
                tranferImg1()
                i = ArraySrc.findIndex(function(item)
                {
                    const getSrcLight = getimg.getAttribute("src")
                    return item.getAttribute("src") === getSrcLight
                })
                i --
                if( i<0 )
                {
                    i=2
                }
                const backimg = ArraySrc[i].getAttribute("src")
                getimg.setAttribute("src",backimg)
            }
        })
    })
})
function tranferImg()
{
    const getModalBody = document.querySelector(".modal__body")
    getModalBody.classList.add("modal__body2")
    setTimeout(function()
    {
    getModalBody.classList.remove("modal__body2")

    },400)
}
function tranferImg1()
{
    const getModalBody = document.querySelector(".modal__body")
    getModalBody.classList.add("modal__body3")
    setTimeout(function()
    {
    getModalBody.classList.remove("modal__body3")

    },400)
}