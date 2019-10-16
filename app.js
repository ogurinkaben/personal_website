	function openNav( ) {
		document.getElementById( "myNav" ).style.width = "100%";
	}

	function closeNav( ) {
		document.getElementById( "myNav" ).style.width = "0%";
	}
	const animateNav = ( ) => {
		if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
			document.getElementById( "nav" ).classList.add( 'activeNav' );

		}
		else {
			document.getElementById( "nav" ).classList.remove( 'activeNav' );
		}
	}
	window.onscroll = ( ) => {
		animateNav( )
	};
