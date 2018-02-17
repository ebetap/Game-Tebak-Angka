$(document).ready(function()
{
	var status;
	$("#panel").hide();
    $("#mudah").click(function(){
        $("#panel").fadeIn("slow");
        document.getElementById("level").innerHTML="LEVEL MUDAH";
    });

    $("#medium").click(function(){
        $("#panel").fadeIn("slow");
        document.getElementById("level").innerHTML="LEVEL MEDIUM";
    });

    $("#sulit").click(function(){
        $("#panel").fadeIn("slow");
        document.getElementById("level").innerHTML="LEVEL SULIT";
    });
});
	localStorage.setItem("topscore_mudah",0);
	localStorage.setItem("topscore_medium",0);
	localStorage.setItem("topscore_sulit",0);
	document.getElementById("ts_mudah").innerHTML=localStorage.getItem("topscore_mudah");
	document.getElementById("ts_medium").innerHTML=localStorage.getItem("topscore_medium");
	document.getElementById("ts_sulit").innerHTML=localStorage.getItem("topscore_sulit");
	var maxScore_mudah=1000;
	var maxScore_medium=3000;
	var maxScore_sulit=5000;
	var tempScore=0;
	var score=0;
	var menang=false;
	var topscore_mudah=0;
	var topscore_medium=0;
	var topscore_sulit=0;
	var jmlTebakan=0;
	var mudah=Math.floor(Math.random()*101);
	var medium=Math.floor(Math.random()*401);
	var sulit=Math.floor(Math.random()*1001);
	var sysRand=0;

	function stmudah(){
		status=1;
		sysRand+=mudah;
	}
	function stmedium(){
		status=2;
		sysRand+=medium;
	}

	function stsulit(){
		status=3;
		sysRand+=sulit;
	}

	function cek(){
		var answer=document.getElementById("game").value;

		if(answer==""){
			if(status==1){
				alert("Masukan Angka 1-100");
			}else if(status==2){
				alert("Masukan Angka 1-400");
			}else if(status==3){
				alert("Masukan Angka 1-1000");
			}
		}else{
			if(status==1){
				jmlTebakan++;
				if(answer>100){
					alert("Maksimal inputan adalah 100");
				}else if(answer<sysRand){
					alert("angka terlalu kecil");
					document.getElementById("angkakecil").innerHTML="Angka kecil:"+answer;
				}else if(answer>sysRand){
					alert("angka terlalu Besar");
					document.getElementById("angkabesar").innerHTML="Angka Besar:"+answer;
				}else if(answer==sysRand){
					alert("Tebakan Benar");
					menang=true;
					score=maxScore_mudah-(jmlTebakan*20);
					if(localStorage.getItem("topscore_mudah")==null){
						localStorage.setItem("topscore_mudah",0);
					}else{
						if(score>localStorage.getItem("topscore_mudah")){
						localStorage.setItem("topscore_mudah",score)
						}
					}
				}
			}else if (status==2){
				jmlTebakan++;
				if(answer>400){
					alert("Maksimal inputan adalah 400");
				}else if(answer<sysRand){
					alert("angka terlalu kecil");
					document.getElementById("angkakecil").innerHTML="Angka kecil:"+answer;
				}else if(answer>sysRand){
					alert("angka terlalu Besar");
					document.getElementById("angkabesar").innerHTML="Angka Besar:"+answer;
				}else if(answer==sysRand){
					alert("Tebakan Benar");
					menang=true;
					score=maxScore_medium-(jmlTebakan*50);
					if(localStorage.getItem("topscore_medium")==null){
						localStorage.setItem("topscore_medium",0);
					}else{
						if(score>localStorage.getItem("topscore_medium")){
						localStorage.setItem("topscore_medium",score)
						}
					}
				}

				if (jmlTebakan==20 && menang==false) {
					alert("")
				}
			}else if(status==3){
				jmlTebakan++;
				if(answer>1000){
					alert("Maksimal inputan adalah 1000");
				}else if(answer<sysRand){
					alert("angka terlalu kecil");
					document.getElementById("angkakecil").innerHTML="Angka kecil:"+answer;
				}else if(answer>sysRand){
					alert("angka terlalu Besar");
					document.getElementById("angkabesar").innerHTML="Angka Besar:"+answer;
				}else if(answer==sysRand){
					alert("Tebakan Benar");
					menang=true;
					score=maxScore_sulit-(jmlTebakan*100);

					if(localStorage.getItem("topscore_sulit")==null){
						localStorage.setItem("topscore_sulit",0);
					}else{
						if(score>localStorage.getItem("topscore_sulit")){
						localStorage.setItem("topscore_sulit",score)
						}
					}
				}

				if (jmlTebakan==10 && menang==false) {
					alert("Kesempatan Menebak Habis, Anda Kalah!");
				}
			}
		}
	}