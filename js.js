// Template literals
const ingredients = `
     <h2>Ingredients </h2>
        <ul>
            <li>100g sushi rice</li>
            <li>1 sheet nori seaweed</li>
            <li>2 tbsp sushi vinegar</li>
            <li>soy sauce</li>
            <li>wasabi</li>
            <li>sushi ginger</li>
            <li>roasted white sesame seeds (optional)</li>
            <br>
            <li> possible fillings</li>
            <li>tuna – sashimi grade, raw</li>
            <li>salmon – sashimi grade, raw</li>
            <li>avocado</li>
            <li>cucumber</li>
            <li>crab sticks</li>
            <li> canned tuna mixed with mayo</li>
            <li>prawns</li>
         </ul>
`;
const prepare = `
     <h2>How To Prepare</h2>
        <ol>
            <li>
                To make sushi rice, Japanese white rice is mixed with a special 
                sushi rice vinegar.
            </li>
            <li>
                Once you have your sushi rice prepared, you will need to begin by laying
                 out a preparation area with your makisu rolling mat.
                Place a sheet or nori on the mat and cover two thirds of one side 
                of your nori seaweed with your sushi rice approximately 1cm high.
            </li>
            <li>            
                Add your ingredients in a line on top of the rice 
                in the centre. You can choose any combination of ingredients
                 that compliment each other well. We went for salmon, salad and 
                 mayonnaise for this one.
            </li>
            <li>            
                Now for the fun bit. Using the wooden rolling mat, start 
                rolling up the ingredients away from you, while keeping the
                 roll tight. The moisture from the rice will help it stick together.
            </li>
            <li>            
                 You can then cut your roll into 6-8 pieces and serve with some 
                 soy sauce, wasabi, sushi ginger and cup of sencha green tea.
            </li>
        </ol>
`;
const tips = `
     <h2>Tips and Information</h2>
        <ul>
            <li>
                - Try wrapping your sushi rolling mat with cling film before you start
                 rolling as this will not only make the mat easier to clean after using, 
                 but helps the sticky rice from getting stuck on the mat.
            </li>
            <li>
                - It is a good idea to have a bowl of water next to you when you are making 
                makizushi as it is important to keep your fingers wet so that the rice doesn’t
                 stick to them. It is also a good idea to keep the knife wet when you cut 
                 it to guarantee that you get a clean cut.
            </li>
            <li>
                - You can make what’s called an Uramaki roll, or an inside out roll.
                 This is made with the nori on the inside and the rice on the outside
                  of the roll. Uramaki is great sprinkled with roasted white sesame seeds.
            </li>
            <li>
                - Makizushi usually come in two types, futomaki and hosomaki. 
                Futomaki is a thick roll like the one we are making in the photos above
                 with a selection of ingredients inside. Hosomaki is a thinner version, 
                 usually containing just one ingredient such as tuna, salmon or cucumber.
            </li>
            <li>
                - You can use any types of ingredients for sushi rolls. 
                Many of the popular ones like California Roll (Crab Sticks, Avocado
                & Cucumber) and the Philadelphia Roll (Smoked Salmon, Cream Cheese
                & Cucumber) were both invented outside Japan.
            </li>
        </ul>
`;

document.querySelector('.Ingredients').innerHTML = ingredients;
document.querySelector('.prepare').innerHTML = prepare;
document.querySelector('.tips').innerHTML = tips;

