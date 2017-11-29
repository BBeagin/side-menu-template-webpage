window.addEventListener("load", function()
{
  var load_screen = document.getElementsByClassName("loading_back")[0];
  document.body.removeChild(load_screen)
})

function ReSize()
{
	var viewPortWidth;
	var viewPortHeight;

	//standard
	if (typeof window.innerWidth != 'undefined')
	{
		viewPortWidth = window.innerWidth,
		viewPortHeight = window.innerHeight
	}

	// IE6
	else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0)
	{
		viewPortWidth = document.documentElement.clientWidth,
		viewPortHeight = document.documentElement.clientHeight
	}

	// older versions of IE
	else
	{
		viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
		viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
	}
	
	if((viewPortWidth/viewPortHeight)<3)
	{
		document.getElementsByClassName("tabs")[0].setAttribute("style","font-size: 4vw;")
    document.getElementsByClassName("title_container")[0].setAttribute("style","font-size: 6vw;")
    document.getElementById("menu_icon").setAttribute("style","height: 30%;")
	}
	else
	{
		document.getElementsByClassName("tabs")[0].setAttribute("style","font-size: 10vh;")
    document.getElementsByClassName("title_container")[0].setAttribute("style","font-size: 20vh;")
    document.getElementById("menu_icon").setAttribute("style","height: 50%;")
	}
	if(document.getElementById("menu_icon").getAttribute("onclick") == "hideMenu()")
	{
		if(viewPortWidth>viewPortHeight)
		{
			document.getElementsByClassName("menu")[0].setAttribute("style","left: 0vw;height: 70vh;")
		}
		else
		{
			document.getElementsByClassName("menu")[0].setAttribute("style","left: 0vw;height: 25vw;")
		}
	}
	else
	{
		if(viewPortWidth>viewPortHeight)
		{
			document.getElementsByClassName("menu")[0].setAttribute("style","left: -30vw;height: 70vh;")
		}
		else
		{
			document.getElementsByClassName("menu")[0].setAttribute("style","left: -30vw;height: 25vw;")
		}
	}
}
function hideMenu()
{
  document.getElementsByClassName("menu")[0].setAttribute("style","left: -30vw;")
  document.getElementsByClassName("main")[0].setAttribute("style","width: 100vw;")
  document.getElementById("menu_icon").setAttribute("onclick","showMenu();ReSize()")
}
function showMenu()
{
  document.getElementsByClassName("menu")[0].setAttribute("style","left: 0vw;")
  document.getElementsByClassName("main")[0].setAttribute("style","width: 80vw;")
  document.getElementById("menu_icon").setAttribute("onclick","hideMenu()")
}