# BiL Explorer

Welcome to the BiL (Biodiversity-in-Literature) explorer!

This bachelor thesis project was produced during my time at the university of Leipzig, with help and guidance from Prof. Dr. Manuel Burghardt, Andreas Niekler, (Dr. Ing.), and Lars Langer.

It builds upon the data produced by
<a href="https://besjournals.onlinelibrary.wiley.com/doi/10.1002/pan3.10256">
  this paper
</a>
.

## Prod Setup

Prerequisite: Install docker.

Theoretically all setup should be handled with `docker compose up`.

## Local Dev Setup

You will need to run a postgresql locally, see relevant docs in order to run.

Create a folder in the project root called data, which contains the data which must have been provided to you by the BiL paper team.
You should have two files, one for the Author/Work metadata, and one for the occurrences.

Install node and yarn. (I will be using yarn but you can use npm aliases.)

Begin by filling the database, using `yarn run refill`, give your migration any name and afterwards the seeding process will begin.
This will take some time, grab a drink.

After the database is filled, (once your occurrences are being filled you can already begin this step preliminarily) 
you can setup your dev environment locally by running
`yarn run dev:client`, and `yarn run dev:server`, simaltaneously.

Feel free to contact me
<a href="&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x63;&#x6f;&#x6e;&#x74;&#x61;&#x63;&#x74;&#x40;&#x6e;&#x6f;&#x68;&#x61;&#x72;&#x61;&#x2e;&#x6d;&#x65;?subject=Hey! - BiL Explorer">
  here
</a>
.
<br />
For a complete, unique list of taxons that are available to this app, click here.
<br />
<span className="italic">
~ Ned O'Hara
</span>