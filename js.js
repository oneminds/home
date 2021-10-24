let pre = document.getElementById('pre');
let loginn = document.getElementById('login');
loginn.style.display = 'none';
setTimeout( function(){
pre.style.display = 'none';
let xx = document.getElementById('login');
xx.style.display = 'block';
let bd = document.getElementById('body');
bd.style.backgroundColor = '#fff';
let i = document.getElementById('i');
i.addEventListener('click', function(){
	// let inp = document.getElementById('inp');
	// inp.style.animation = 'wer 0.4s linear';
	// inp.style.opacity = '1';
	// inp.style.width = '370px';
});
let pp1 = document.getElementById('pp1');
let ppd = document.getElementById('pd1');
let x= 0;
let buutton = document.getElementById('sh');
buutton.addEventListener('click', function(){
	localStorage.setItem('tap', 'none');
	let o = localStorage.getItem('tap');
	// localStorage.setItem('tapp', 'block');
	// let op = localStorage.getItem('tapp');
	let text = document.getElementById('post').value;
let date = document.getElementById('date').value;
	pp1.innerHTML = text;
	ppd.innerHTML = date;
	localStorage.setItem('date', date);
	let dp = localStorage.getItem('date');
	localStorage.setItem('text', text);
	let q = localStorage.getItem('text');
	let pr = document.getElementById('pr');
	pr.style.display = 'none';
	let po = document.getElementById('posts');
	po.style.display = 'block';
	x++;
	console.log(x);

	let pp2 = document.getElementById('pp2');
	let ppd2 = document.getElementById('ppd2');
	let pp3 = document.getElementById('pp3');
	let ppd3 = document.getElementById('ppd3');
	buutton.addEventListener('click', function(){
	if (x == 2) {
		// let text = document.getElementById('post').value;
		// let date = document.getElementById('date').value;
		pp2.innerHTML = text;
		ppd2.innerHTML = date;
		localStorage.setItem('tt', text);
		let d = localStorage.getItem('tt');
		let posts2 = document.getElementById('post2');
		posts2.style.display = 'block';
	}
	if (x == 3) {

		// let text = document.getElementById('post').value;
		// let date = document.getElementById('date').value;
		pp3.innerHTML = text;
		ppd3.innerHTML = date;
		localStorage.setItem('ttt', text);
		let dd = localStorage.getItem('ttt');
		let posts2 = document.getElementById('post3');
		posts2.style.display = 'block';
	}
});

});

let plus = document.getElementById('plus');
plus.addEventListener('click', function(){
	let pr = document.getElementById('pr');
	let hf = document.getElementById('allp');
	hf.style.display = 'none';
	pr.style.display = 'block';
	let ppq = document.getElementById('posts');
	ppq.style.display = 'none';
	let text = document.getElementById('post').value;
let date = document.getElementById('date').value;
text = [];
date = [];
});

let onemind = document.getElementById('onemind');
onemind.addEventListener('click', function(){
	let t = document.getElementById('pr');
	t.style.display = 'none';
	let v = document.getElementById('posts');
	v.style.display = 'block';
	let vq = document.getElementById('allp');
	vq.style.display = 'none';
});
}, 4000);

window.onload = function(){
	if (localStorage.getItem('text')!=null) {
		let q = localStorage.getItem('text');
		let text = document.getElementById('post').value;
		let date = document.getElementById('date').value;
		pp1.innerHTML = q;
	}
	if (localStorage.getItem('tap')!==null) {
		let o = localStorage.getItem('tap');
		let pr = document.getElementById('pr');
		pr.style.display = o;

	}
	if (localStorage.getItem('tapp')!==null) {
		let op = localStorage.getItem('tapp');
		let posts = document.getElementById('posts');
		posts.style.display = op;

	}
	if (localStorage.getItem('date')!==null) {
		let dp = localStorage.getItem('date');
		pd1.innerHTML = dp;
	}
	if (localStorage.getItem('tt')!==null) {
		let d = localStorage.getItem('tt');
		pp2.innerHTML = d;
		let posts2 = document.getElementById('post2');
		posts2.style.display = 'block';
		let posts3 = document.getElementById('post3');
		posts3.style.display = 'block';
	}
	if (localStorage.getItem('ttt')!==null) {
		let dd = localStorage.getItem('ttt');
		pp3.innerHTML = dd;
		let posts2 = document.getElementById('post2');
		posts2.style.display = 'block';
		let posts3 = document.getElementById('post3');
		posts3.style.display = 'block';
	}

}
let pl = document.getElementById('i');
let por = document.getElementById('allp');
pl.addEventListener('click', function(){
	por.style.display = 'block';
	let cf = document.getElementById('posts');
	cf.style.display = 'none';
	let oi = document.getElementById('pr');
	oi.style.display = 'none';
});

let that = document.getElementById('that');
that.addEventListener('click', function(){
	that.innerHTML = 'For all';
	that.style.color = 'green';
	let pw1 = document.getElementById('pp1');
	pw1.style.borderBottom = '3px solid green';
	setTimeout( function(){
		that.innerHTML = 'For all';
		that.style.color = 'red';

	}, 5000);
});