# Alexa Skill - Guess My Character

## What is the skill doing?

Alexa Skill takes in a set of inputs from the user and returns a name of a celebrity which resembles the most with the given inputs.

## Where are we getting the data from?

We have a JSON file conatining names of 100 celebrities. Check inside the `lambda` folder.

## How can I use it?

In order to use the Skill on your Alexa Console, you need to import it or copy-paste the code.

Let us see how do you copy-paste.

- Once you created a hello-world skill template using the Alexa Developer Console (Selecting NodeJS).
- In the left pane click on the JSON editor, copy and paste the json file, `interactionModels/custom/en-IN.json` or `interactionModels/custom/en-IN.json`, depending on your locale.
- Save and Build the Model.
- Go to Code Tab.
- Copy and paste the code of each file inside the l`lambda` folder.
- You would have to create a new file `actor-data.json`.
- Once pasted, Save and Deploy the code.
- Go to Test tab.
- Test the Skill using the invocation name.

## Skill Details

- The Skill can be used as template for a Basic Alexa Skill.
- The Main intent handling the inputs, has slots. Slots used are custom and built-in. They also use slot-validation.
- The Skill uses Skill setting for Dilog-Delegation.
- MORE SPECIFICS TO BE ADDED.

## Contributing

You can make changes and let the community know about it, via giving PRs. Make sure you have included all the files which are currently present in the repo. These files are mandatory to be there as Alexa CANNOT import a skill without these files.  
You shall make a separate branch and work on that, while developing your skill on top of the current code.
If you are new to Github, do not directly clone this repo, first fork it and then clone it.

## Code of Conduct

In order to ensure that the Alexa Dev Hub Community is welcoming to all, please review and abide by the Code of Conduct.

## Support Alexa Community Jaipur.

We at ACJ aim to develop Alexa Skills for everyone, and let the world leverage the power of Alexa.  
If the repo was helpful, leave a STAR.

_Thank You_
