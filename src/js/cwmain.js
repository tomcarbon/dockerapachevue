
Vue.component('app1', {
	data() {
		return {
		}
        },
	created: function() {
		/*
			console.info("Hello, here I am in app1!");
		*/
	},
	methods: {
	},
        template: `
		<div id="app1" >
                                <h1>Section 2</h1>
				<p>This is section 2</p>
		</div>
                                `       // do not forget this little tick!
});



Vue.component('app2', {

	data() {
		return {
		}
	},
	created: function() {
	},
	methods: {
	},
        template: `
                        <div id="app2">
                                <h1>Section 1</h1>
				<p>This is section 1</p>
                        </div>
                                `       // do not forget this little tick!
});


Vue.component('intro-screen', {
        template: `
		<div id='intro-screen'>
			<br>
			<h2><center>TITLE SCREEN </center></h2>
			<p>Welcome to the splash screen.</p>
		</div>          `       // do not forget this little tick!
});


// this loads all the ads, and everything else.
const cwmainapp = new Vue({
	el: "#cwmainapp",
	data() {
		return {
			ttemp:	0,
		}
	},		
	mounted: function() {
	    this.initThisSchznit();		// load the main list from the SQL into the globalish variable.
	},		
	methods: {
		initThisSchznit() {
		},
		homebutton() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			$("#intro-screen").show();
			$("#app2").hide();
			$("#app1").hide();
		},
		economicsbutton() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			$("#intro-screen").hide();
			$("#app2").show();
			$("#app1").hide();
		},
		physicsbutton () {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			$("#intro-screen").hide();
			$("#app2").hide();
			$("#app1").show();
		},
	},		
	template: `
		<div class="col-md-12">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header row clearfix" id="headerspec">
				<div class="hidden-xs col-sm-12 col-md-12 col-lg-12">
					<h1 color="white"> A Sample Website</h1>
				</div>
				<div class="col-xs-12 hidden-sm hidden-md hidden-lg">
					<h4 color="white"> A Sample Website</h4>
				</div>
					<!--a href="index.php"><img src="img/logo.png"/></a-->

				<div class="col-md-12">
					<button class="nicebutton0" id="idhome" v-on:click="homebutton">HOME</button>
					<button class="nicebutton0" id="ideconomics" v-on:click="economicsbutton">GoToApp1</button>
					<button class="nicebutton0" id="idphysics" v-on:click="physicsbutton">GoToApp2</button>
				</div>
			</div>
			<div class="col-md-12" color="black">
				<intro-screen />
	                        <app1 />
	                        <app2 />
			</div>
		</div>
	`	// don't forget that tick!		
})


$(document).ready(function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
});
