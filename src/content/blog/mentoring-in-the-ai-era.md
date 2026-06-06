---
title: "Mentoring juniors when AI writes the first draft"
description: "AI happily writes the first version a junior engineer used to write themselves. How do you mentor for depth when the struggle that built it is now optional?"
date: 2026-06-05
tags: ["AI", "Mentorship", "Engineering"]
---

I learned most of what I know the slow way. I got stuck, stayed stuck, read the source
when the docs lied, and eventually understood something in my bones because I'd paid
for it in confusion. That path was never efficient. It was just the only one available,
so all of us walked it, and the walking is where the engineer got made.

That path is now optional. A junior engineer can route around the confusion entirely —
the model produces a clean first draft, the ticket closes, everyone moves on. The output
is fine. I keep asking myself whether the engineer is.

## The struggle was never the point — until it was

It's easy to romanticize hardship, so let me be careful. Suffering through boilerplate
taught me nothing valuable, and I'm glad it's gone. But some of the struggle wasn't
incidental. The hours spent figuring out *why* the obvious approach was wrong, building
a mental model of how the pieces actually fit — that wasn't friction around the
learning. It *was* the learning.

When AI absorbs the friction, it absorbs the good kind along with the wasteful kind,
and it doesn't sort them for you. A junior can now ship something correct without ever
forming the model that would let them debug it, extend it, or know when it's quietly
the wrong call.

## Faster shipping, wider gap

So here's the uncomfortable thing I've watched happen: juniors are shipping faster than
ever, and the distance to genuine senior judgment is getting *wider*, not narrower.
Speed of output and depth of understanding used to rise together, roughly. AI broke that
link. You can now have a lot of one and very little of the other, and from the outside,
on a dashboard, they look the same.

> A closed ticket used to be weak evidence of understanding. Now it's almost no evidence
> at all. I have to go looking for the understanding directly.

## Mentoring on purpose

Which means mentorship can't be passive anymore. It used to be partly automatic — give
someone hard work, the work taught them. Now the work teaches them less, so the teaching
has to be deliberate, and that's a real shift in how I spend my attention.

In practice it looks like reviewing the *reasoning*, not just the diff. I'll ask why
this approach over the other two, what happens under load, what breaks if this
assumption is wrong — and I genuinely want the answer to come from them, not from a
follow-up prompt. The goal isn't to slow them down. It's to make sure someone is home
behind the output.

I also try to protect a little productive struggle on purpose. Not busywork — real
problems where I ask them to form a hypothesis before reaching for the model. The model
is allowed; thinking first is the rule. It's the difference between using a tool and
being used by one.

## Making taste teachable

The thing I most want to pass on is the one that's hardest to generate: knowing what
good looks like. I wrote about [taste being the new bottleneck](/home/blog/taste-is-the-bottleneck/),
and mentorship is where taste actually transfers — by narrating the judgment out loud.
*Here's why this name is misleading. Here's the failure mode I'm smelling. Here's why
I'd delete this even though it works.*

That narration used to happen implicitly while we struggled side by side. Now I have to
do it explicitly, because the struggle that used to surface those moments has been
optimized away.

## What I keep coming back to

AI didn't make junior engineers less capable. It made it possible to look capable
without becoming capable, and it put that option right in front of people early, before
they know which doors they're closing.

**My job isn't to keep them away from the tools — it's to make sure they're still being
built into engineers while they use them.** That's slower and less measurable than it
used to be, and I think it's the most important thing I do right now.

I'm still figuring out how much struggle to protect and how much to let the tools
dissolve. If you're mentoring through this same shift, I'd really like to compare notes.
