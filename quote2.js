
$(document).ready(function(){
		var quoteSource=[
		{
			quote: "Pure mathematics is, in its way, the poetry of logical ideas.",
			name:"Albert Einstein"
	    },
	    {
	    	quote:"Mathematics is the art of giving the same name to different things.",
	    	name:"Henri Poincar&eacute"
	    },
	    {  	quote:"Innovation is not the product of logical thought, even though the final product is tied to a logical structure.",
	    	name:"Albert Einstein"
	    },
{  	quote:"All logical arguments can be defeated by the simple refusal to reason logically.",
	    	name:"Steven Weinberg"
	    },{   	quote:"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.",
	    	name:"Albert Einstein"
	    },{
	    	quote:"Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.",
	    	name:"Albert Einstein"
	    },{
	    	quote:"The object of pure physics is the unfolding of the laws of the intelligible world; the object of pure mathematics that of unfolding the laws of human intelligence.",
	    	name:"James Joseph Sylvester"
	    },{
	    	quote:"You can never solve a problem on the level on which it was created.",
	    	name:"Albert Einstein"
	    },{
	    	quote:"Reading, after a certain age, diverts the mind too much from its creative pursuits. Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.",
	    	name:"Albert Einstein"
	    },{
	    	quote:"People love chopping wood. In this activity one immediately sees results.",
	    	name:"Albert Einstein"
	    },{
	    	quote:"In so far as theories of mathematics speak about reality, they are not certain, and in so far as they are certain, they do not speak about reality.",
	    	name:"Albert Einstein"
	    },{
	    	quote:"Mathematicians do not study objects, but relations between objects.",
	    	name:"Henri Poincar&eacute"
	    },{
	    	quote:"Mathematicians are born, not made.",
	    	name:"Henri Poincar&eacute"
	    },{
	    	quote:"Geometry is not true, it is advantageous.",
	    	name:"Henri Poincar&eacute"
	    },{
	    	quote:"Point set topology is a disease from which the human race will soon recover.",
	    	name:"Henri Poincar&eacute"
	    },{
	    	quote:"How is an error possible in mathematics?",
	    	name:"Henri Poincar&eacute"
	    },{
	    	quote:"Hypotheses are what we lack the least.",
	    	name:"Henri Poincar&eacute"
	    },{
	    	quote:"In the old days when people invented a new function they had something useful in mind.",
	    	name:"Henri Poincar&eacute"
	    },{
	    	quote:"Eureka!",
	    	name:"Archimedes"
	    },{
	    	quote:"Beans have a soul.",
	    	name:"Pythagoras"
	    },{
	    	quote:"Mathematics is a game played according to certain simple rules with meaningless marks on paper.",
	    	name:"David Hilbert"
	    },{
	    	quote:"No other question has ever moved so profoundly the spirit of man; no other idea has so fruitfully stimulated his intellect; yet no other concept stands in greater need of clarification than that of the infinite.",
	    	name:"David Hilbert"
	    },{
	    	quote:"One can measure the importance of a scientific work by the number of earlier publications rendered superfluous by it.",
	    	name:"David Hilbert"
	    },{
	    	quote:"An old French mathematician said: A mathematical theory is not to be considered complete until you have made it so clear that you can explain it to the first man whom you meet on the street.",
	    	name:"David Hilbert"
	    },{
	    	quote:"He who seeks for methods without having a definite problem in mind seeks in the most part in vain.",
	    	name:"David Hilbert"
	    },{
	    	quote:"If I were to awaken after having slept for a thousand years, my first question would be: Has the Riemann Hypothesis been proven?",
	    	name:"David Hilbert"
	    },{
	    	quote:"Perfect numbers like perfect men are very rare.",
	    	name:"Ren&eacute Descartes"
	    },{
	    	quote:"I am indeed amazed when I consider how weak my mind is and how prone to error.",
	    	name:"Ren&eacute Descartes"
	    },{
	    	quote:"The description of right lines and circles, upon which geometry is founded, belongs to mechanics. Geometry does not teach us to draw these lines, but requires them to be drawn.",
	    	name:"Isaac Newton"
	    },{
	    	quote:"I have explained the phenomena of the heavens and of our sea by the force of gravity, but I have not yet assigned a cause to gravity.",
	    	name:"Isaac Newton"
	    },{
	    	quote:"Infinites, when considered absolutely without any restriction or limitation, are neither equal nor unequal, nor have any certain proportion one to another, and therefore, the principle that all infinites are equal is a precarious one.",
	    	name:"Isaac Newton"
	    },{
	    	quote:"When I have clarified and exhausted a subject, then I turn away from it, in order to go into darkness again. [...] I imagine the world conqueror must feel thus, who, after one kingdom is scarcely conquered, stretches out his arms for others.",
	    	name:"Carl Friedrich Gauss"
	    },{
	    	quote:"It is not knowledge, but the act of learning, not possession but the act of getting there, which grants the greatest enjoyment.",
	    	name:"Carl Friedrich Gauss"
	    },{
	    	quote:"But in our opinion truths of this kind should be drawn from notions rather than from notations.",
	    	name:"Carl Friedrich Gauss"
	    },{
	    	quote:"I mean the word proof not in the sense of the lawyers, who set two half proofs equal to a whole one, but in the sense of a mathematician, where ½ proof = 0, and it is demanded for proof that every doubt becomes impossible.",
	    	name:"Carl Friedrich Gauss"
	    },{
	    	quote:"A mathematician is a device for turning coffee into theorems.",
	    	name:"Alfr&eacuted R&eacutenyi"
	    },{
	    	quote:"It is only necessary to be precise when there is some doubt as to the meaning of a phrase, and then the precision should be put in the place where the doubt exists.",
	    	name:"Richard Feynman"
	    },{
	    	quote:"The first principle is that you must not fool yourself — and you are the easiest person to fool.",
	    	name:"Richard Feynman"
	    },{
	    	quote:"Know how to solve every problem that has been solved.",
	    	name:"Richard Feynman"
	    },{
	    	quote:"What I cannot create, I do not understand.",
	    	name:"Richard Feynman"
	    },{
	    	quote:"We cannot define anything precisely. If we attempt to, we get into that paralysis of thought that comes to philosophers, who sit opposite each other, one saying to the other, \"You don\'t know what you are talking about!\". The second one says, \"What do you mean by <i>know</i>? What do you mean by <i>talking</i>? What do you mean by <i>you</i>?\"",
	    	name:"The Feynman Lectures on Physics"
	    } ,{
	    	quote:"A person talks in such generalities that everyone can understand him and it's considered to be some deep philosophy. However, I would like to be very rather more special and I would like to be understood in an honest way, rather than in a vague way.",
	    	name:"Richard Feynman"
	    },{
	    	quote:"Mathematics is not just a language. Mathematics is a language plus reasoning. ",
	    	name:"Richard Feynman"
	    },{
	    	quote:"In general, we look for a new law by the following process: First we guess it. Then we – now don\'t laugh, that\'s really true. ",
	    	name:"Richard Feynman"
	    },
	   {
	    	quote:"von Neumann gave me an interesting idea: that you don\'t have to be responsible for the world that you\'re in. So I have developed a very powerful sense of social irresponsibility as a result of von Neumann\'s advice. It\'s made me a very happy man ever since.",
	    	name:"Richard Feynman"
	    },{
	    	quote:"Since then I never pay attention to anything by \"experts\". I calculate everything myself.",
	    	name:"Richard Feynman"
	    },{
	    	quote:"You can know the name of that bird in all the languages of the world, but when you're finished, you'll know absolutely nothing whatever about the bird.",
	    	name:"Richard Feynman"
	    },{
	    	quote:"I learned very early the difference between knowing the name of something and knowing something.",
	    	name:"Richard Feynman"
	    },{
	    	quote:"Certainly the best times were when I was alone with mathematics, free of ambition and of pretense, and indifferent to the world.",
	    	name:"Robert Langlands"
	    },{
	    	quote:"I am afraid that mathematics will perish by the end of this century if the present trend for senseless abstraction — as I call it: theory of the empty set — cannot be blocked up.",
	    	name:"Carl Ludwig Siegel"
	    },{
	    	quote:"First rate mathematicians choose first rate people, but second rate mathematicians choose third rate people.",
	    	name:"Andr&eacute Weil"
	    },{
	    	quote:"The essence of mathematics lies in its freedom.",
	    	name:"Georg Cantor"
	    },{
	    	quote:"To those who ask what the infinitely small quantity in mathematics is, we answer that it is actually zero. Hence there are not so many mysteries hidden in this concept as they are usually believed to be.",
	    	name:"Leonhard Euler"
	    },{
	    	quote:"You can not apply mathematics as long as words still becloud reality.",
	    	name:"Hermann Weyl"
	    },{
	    	quote:"Rigour is to the mathematician what morality is to men.",
	    	name:"Andr&eacute Weil"
	    },{
	    	quote:"Music is a hidden arithmetic exercise of the soul, which does not know that it is counting.",
	    	name:"Gottfried Leibniz"
	    },{
	    	quote:"Newton was the greatest genius that ever existed, and the most fortunate, for we cannot find more than once a system of the world to establish.",
	    	name:"Joseph Louis Lagrange"
	    },{
	    	quote:"Life's most important questions are, for the most part, nothing but probability problems.",
	    	name:"Pierre-Simon Laplace"
	    },{
	    	quote:"It is readily seen that any theory written by Laplace will be superior to all produced of lower standing. It appears to me that if one wants to make progress in mathematics, one should study the masters and not the pupils.",
	    	name:"Niels Henrik Abel"
	    },{
	    	quote:"[...] a question of number is as important as a question of the system of the world.",
	    	name:"Carl Gustav Jacob Jacobi"
	    },{
	    	quote:"It is true that a mathematician who is not somewhat of a poet, will never be a perfect mathematician.",
	    	name:"Karl Weierstrass"
	    },{
	    	quote:"\'The surprising thing about this paper is that a man who could write it--would.\'",
	    	name:"John Edensor Littlewood"
	    },{
	    	quote:"I recall once saying that when I had given the same lecture several times I couldn't help feeling that they really ought to know it by now.",
	    	name:"John Edensor Littlewood"
	    },{
	    	quote:"It strikes me that mathematical writing is similar to using a language. To be understood you have to follow some grammatical rules. However, in our case, nobody has taken the trouble of writing down the grammar; we get it as a baby does from parents, by imitation of others. Some mathematicians have a good ear; some not (and some prefer the slangy expressions such as \'iff\'). That\'s life.",
	    	name:"Jean-Pierre Serre"
	    },{
	    	quote:"When we talk mathematics, we may be discussing a <i>secondary</i> language built on the <i>primary</i> language of the nervous system.",
	    	name:"John von Neumann"
	    },{
	    	quote:"It is just as foolish to complain that people are selfish and treacherous as it is to complain that the magnetic field does not increase unless the electric field has a curl. Both are laws of nature.",
	    	name:"John von Neumann"
	    },{
	    	quote:"Young man, in mathematics you don\'t understand things. You just get used to them.",
	    	name:"John von Neumann"
	    },{
	    	quote:"With four parameters I can fit an elephant, and with five I can make him wiggle his trunk.",
	    	name:"John von Neumann"
	    },{
	    	quote:"Either mathematics is too big for the human mind, or the human mind is more than a machine.",
	    	name:"Kurt G&oumldel"
	    },{
	    	quote:"Informally, recursive systems of axioms cannot be complete.",
	    	name:"Kurt G&oumldel"
	    },{
	    	quote:"If a \'religion\' is defined to be a system of ideas that contains unprovable statements, then G&oumldel taught us that mathematics is not only a religion, it is the only religion that can prove itself to be one.",
	    	name:"John D. Barrow"
	    },{
	    	quote:"Now the first member has 120 different values, while the second member has only 10; [...] hence we conclude that <i>It is impossible to solve the general equation of the fifth degree in terms of radicals.</i> It follows immediately from this theorem, that it is also impossible to solve the general equations of degrees higher than the fifth, in terms of radicals."
  	,name:"Niels Henrik Abel"
	    } ,{
	    	quote:"[...] it is very probable that all roots are real. Of course one would wish for a rigorous proof here; I have for the time being, after some fleeting vain attempts, provisionally put aside the search for this, as it appears dispensable for the immediate objective of my investigation.",
	    	name:" Bernhard Riemann"
	    },{
	    	quote:"A man provided with paper, pencil, and rubber, and subject to strict discipline, is in effect a universal machine.",
	    	name:"Alan Turing"
	    },{
	    	quote:"I believe that at the end of the century the use of words and general educated opinion will have altered so much that one will be able to speak of machines thinking without expecting to be contradicted.",
	    	name:"Alan Turing"
	    },{
	    	quote:"It came as a tremendous surprise, for in his student days Einstein had been a lazy dog [...] He never bothered about mathematics at all.",
	    	name:"Hermann Minkowski"
	    },{
	    	quote:"Even in the games of children there are things to interest the greatest mathematician.",
	    	name:"Gottfried Leibniz"
	    },{
	    	quote:"It may seem paradoxical, but it is probably nevertheless true that it is precisely the effort after a logical perfection of form which has rendered the writings of Gauss open to the charge of obscurity and unnecessary difficulty. The fact is that there is neither obscurity nor difficulty in his writings, as long as we read them in the submissive spirit in which an intelligent schoolboy is made to read his Euclid.",
	    	name:"Henry John Stephen Smith"
	    },{
	    	quote:"As a boy of six I could understand the proof of a mathematical theorem more readily than that meat had to be cut with one\'s knife, not one\'s fork.",
	    	name:"Ferdinand Eisenstein"
	    },
{
	    	quote:"There is scarcely any one who states purely arithmetical questions, scarcely any who understands them.",
	    	name:"Pierre de Fermat"
	    },{
	    	quote:"One often makes a remark and only later sees how true it is.",
	    	name:"Ludwig Wittgenstein"
	    },{
	    	quote:"It is one of the chief skills of the philosopher not to occupy himself with questions which do not concern him.",
	    	name:"Ludwig Wittgenstein"
	    },{
	    	quote:"What should we gain by a definition, as it can only lead us to other undefined terms?",
	    	name:"Ludwig Wittgenstein"
	    },{
	    	quote:"A technical argument by a trusted author, which is hard to check and looks similar to arguments known to be correct, is hardly ever checked in detail.",
	    	name:"Vladimir Voevodsky"
	    },{
	    	quote:"There is no branch of mathematics, however abstract, which may not some day be applied to phenomena of the real world.",
	    	name:"Nikolai Ivanovich Lobachevsky"
	    },{
	    	quote:"It is already all in Dedekind.",
	    	name:"Emmy Noether"
	    },{
	    	quote:"It [...] remained [...] to secure a real definition of the essence of continuity. I succeeded Nov. 24, 1858.",
	    	name:"Richard Dedekind"
	    },{
	    	quote:"A mathematician is a person who can find analogies between theorems; a better mathematician is one who can see analogies between proofs and the best mathematician can notice analogies between theories. One can imagine that the ultimate mathematician is one who can see analogies between analogies.",
	    	name:"Stefan Banach"
	    },{
	    	quote:"Therefore, a certain naivet&eacute, unburdened by conventional wisdom, can sometimes be a positive asset.",
	    	name:"Harish Chandra"
	    },{
	    	quote:"In mathematics we agree that clear thinking is very important, but fuzzy thinking is just as important.",
	    	name:"Harish Chandra"
	    },{
	    	quote:"[...] an author never does more damage to his readers than when he hides a difficulty.",
	    	name:"&Eacutevariste Galois"
	    },{
	    	quote:"Parallel lines have a common end point at an infinite distance.",
	    	name:"Girard Desargues"
	    },{
	    	quote:"Keep computations to the lowest level of the multiplication table.",
	    	name:"David Hilbert"
	    },{
	    	quote:"Begin with the simplest examples.",
	    	name:"David Hilbert"
	    },{
	    	quote:"If you understand something, you understand that it is obvious.",
	    	name:"Israel Gelfand"
	    },{
	    	quote:"The older I get, the more I believe that at the bottom of most deep mathematical problems there is a combinatorial problem.",
	    	name:"Israel Gelfand"
	    },{
	    	quote:"Before one can generalize, formalize, and axiomatize, there must be a mathematical substance.",
	    	name:"Hermann Weyl"
	    },{
	    	quote:"You insist that there is something a machine cannot do. If you tell me precisely what it is a machine cannot do, then I can always make a machine which will do just that.",
	    	name:"John von Neumann"
	    },{
	    	quote:"Problems are often stated in vague terms [...] because it is quite uncertain what the problems really are.",
	    	name:"John von Neumann"
	    },
{
	    	quote:"All problems in mathematics are psychological.",
	    	name:"Pierre Deligne"
	    },{
	    	quote:"I tell you that studying humanities in high school is more important than mathematics - mathematics is too sharp an instrument, no good for kids.",
	    	name:"Stefan Banach"
	    },{
	    	quote:"You have no idea, how much poetry there is in the calculation of a table of logarithms!",
	    	name:"Carl Friedrich Gauss"
	    },{
	    	quote:"Pauca sed matura.",
	    	name:"Carl Friedrich Gauss"
	    },{
	    	quote:"No one shall expel us from the paradise that Cantor has created.",
	    	name:"David Hilbert"
	    },{
	    	quote:"We now come to a decisive step of mathematical abstraction: we forget about what the symbols stand for.",
	    	name:"Hermann Weyl"
	    },

{ quote:"It was Littlewood who said that every positive integer was one of Ramanujan's personal friends.",
	    	name:"G. H. Hardy"
	    },
{ quote:"I remember once going to see him when he was ill at Putney. I had ridden in taxi cab number 1729 and remarked that the number seemed to me rather a dull one, and that I hoped it was not an unfavorable omen. \"No,\" he replied, \"it is a very interesting number; it is the smallest number expressible as the sum of two cubes in two different ways.\"",
	    	name:"G. H. Hardy"
	    },
{ quote:"All physicists, and a good many quite respectable mathematicians, are contemptuous about proof.",
	    	name:"G. H. Hardy"
	    },
{ quote:"Archimedes will be remembered when Aeschylus is forgotten, because languages die and mathematical ideas do not.",
	    	name:"G. H. Hardy"
	    },
{ quote:"<i>Reductio ad absurdum</i>, which Euclid loved so much, is one of a mathematician\'s finest weapons. It is a far finer gambit than any chess play: a chess player may offer the sacrifice of a pawn or even a piece, but a mathematician offers the game.",
	    	name:"G. H. Hardy"
	    },
{ quote:"I still say to myself when I am depressed and find myself forced to listen to pompous and tiresome people \"Well, I have done one thing you could never have done, and that is to have collaborated with Littlewood and Ramanujan on something like equal terms.\"",
	    	name:"G. H. Hardy"
	    },
{ quote:"Even though we know roughly what \"speed\" means, there are still some rather deep subtleties; consider that the learned Greeks were never able to adequately describe problems involving velocity. [...] The Greeks were somewhat confused by such problems, being helped, of course, by some very confusing Greeks.",
	    	name:"The Feynman Lectures on Physics"
	    },
{ quote:"The introduction of the <b>digit 0</b> or the <b>group concept</b> was general nonsense too, and mathematics was more or less stagnating for thousands of years because nobody was around to take such childish steps...",
	    	name:"Alexander Grothendieck"
	    },
{ quote:"If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.",
	    	name:"John von Neumann"
	    },
{ quote:"The pursuit of mathematics is a divine madness of the human spirit.",
	    	name:"Alfred North Whitehead"
	    },
{ quote:"2^{67} - 1 = 193707721 x 761838257287.",
	    	name:"Frank Nelson Cole"
	    },
{ quote:"Mathematics would certainly have not come into existence if one had known from the beginning that there was in nature no exactly straight line, no actual circle, no absolute magnitude.",
	    	name:"Friedrich Nietzsche"
	    },
{ quote:"Those who know that they are profound strive for clarity. Those who would like to seem profound to the crowd strive for obscurity.",
	    	name:"Friedrich Nietzsche"
	    },
{ quote:"The advantage of a bad memory is that one enjoys several times the same good things for the first time.",
	    	name:"Friedrich Nietzsche"
	    },
{ quote:"There are no facts, only interpretations.",
	    	name:"Friedrich Nietzsche"
	    },
{ quote:"If he will not be satisfied with truth in the form of tautology, that is to say, if he will not be content with empty husks, then he will always exchange truths for illusions.",
	    	name:"Friedrich Nietzsche"
	    },
{ quote:"The trouble with computers is you <i>play</i> with them.",
	    	name:"Richard Feynman"
	    },
{ quote:"After the lecture, I talked to a student: \"You take all those notes—what do you do with them?\"",
	    	name:"Richard Feynman"
	    },{ quote:"Mathematicians are extremely lucky, they are paid for doing what they would by nature have to do anyway.",
	    	name:"Harold Davenport"
	    },{ quote:"One should not have a non-teaching fellowship too long, there comes a time when one must make a contribution to society.",
	    	name:"Harold Davenport"
	    },{ quote:"Great mathematics is achieved by solving difficult problems not by fabricating elaborate theories in search of a problem.",
	    	name:"Harold Davenport"
	    },
  { quote:"Above all, work and solitude, the two conditions of a mathematician\'s best hours, became at an early age my frequent companions.",
	    	name:"Robert Langlands"
	    },
	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
	
$('#quoteButton1').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 900;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	}); //end quoteButton1 function
		
});//end document ready



var randomx =Math.random() * 100; 
document.body.style.setProperty('--posx', randomx +'%');


var randomy =Math.random() * 100; 
document.body.style.setProperty('--posy', randomx +'%');