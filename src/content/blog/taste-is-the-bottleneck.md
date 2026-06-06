---
title: "Taste is the new bottleneck"
description: "When anyone can generate working code in seconds, the scarce skill isn't writing it — it's knowing what's worth building and what 'good' actually looks like."
date: 2026-06-04
tags: ["AI", "Engineering", "Staff"]
---

For most of my career the constraint was throughput. There was always more to build
than there were hours to build it, and being good at the job mostly meant producing
correct code faster than the problems arrived. That constraint has quietly dissolved.
I can now generate a plausible first version of almost anything in the time it used to
take me to set up the file.

What surprised me isn't the speed. It's where the work went when the typing got cheap.

## The cost of producing code went to zero

When the marginal cost of writing code drops this far, the value stops living in the
writing. A working implementation is no longer evidence of much — it's the default
output, available to anyone who can describe what they want. The thing that used to
take skill now takes a prompt.

So the bottleneck moved. It moved up, to the decisions that sit above the code:
what are we actually building, is this the right shape for it, and would a careful
engineer look at this and wince? Those questions never had a generator. They still
don't.

## Taste is just compressed judgment

I used to think "taste" was a soft word — the kind of thing you say when you can't
explain why something is wrong. I've come to believe the opposite. Taste is the most
compressed form of engineering judgment we have: thousands of small lessons about
failure modes, coupling, naming, and blast radius, collapsed into an instant reaction
of *this is going to hurt later*.

That reaction is exactly what the model doesn't have. It will produce something
that runs, confidently, whether or not it's the right thing. It has no stake in the
system six months from now. It doesn't feel the dread of the 2am page. The discernment
to look at three working options and know which one we'll regret — that's still
entirely on us.

> The model can tell you what's possible. It cannot tell you what's wise. That gap is
> the whole job now.

## The subtly-wrong answer is the dangerous one

The failure mode I worry about isn't AI producing garbage — garbage is easy to catch.
It's AI producing something that looks right, passes the tests, reads cleanly, and is
quietly wrong in a way you only notice if you already understood the problem deeply.
The plausible-but-wrong answer is far more expensive than the obviously-broken one,
because it sails through the checks we built for human mistakes.

Catching it requires having done the hard thinking anyway. Which means the leverage AI
gives you is roughly proportional to the judgment you bring to it. It's an amplifier,
and amplifiers are honest: they make strong signal stronger and noise louder.

## Saying no is most of the work

The other place taste shows up is restraint. When building is cheap, the temptation is
to build more — more abstractions, more options, more cleverness, because why not, it's
free now. But every line is still a liability someone has to understand and carry. The
cost moved from writing to owning, and owning got relatively more expensive.

So a growing part of my job is deciding what *not* to generate. Pushing back on the
feature that shouldn't exist. Choosing the boring solution over the impressive one.
Deleting the third draft the model happily produced. None of that shows up as output,
and all of it is the work.

## What I'm telling myself

The instinct, when typing gets cheap, is to measure yourself by volume — look how much
I shipped this week. I think that's a trap, and an increasingly bad one. The scoreboard
that matters is moving the other direction.

**When everyone can produce code, the rare thing is knowing which code deserves to
exist.** That's not a skill AI took from us. It's the one it handed back, sharpened, and
asked us to be serious about.

I'm still learning where my own taste is reliable and where it's just habit dressed up
as judgment — that's the next thing I want to get honest about. If you've been feeling
this shift too, I'd like to hear where it's landed for you.
