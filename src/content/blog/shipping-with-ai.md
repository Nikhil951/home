---
title: "Leading a team that ships with AI"
description: "What actually changes in planning, estimation, review, and on-call when your team works alongside AI — and what stubbornly doesn't."
date: 2026-06-06
tags: ["AI", "Leadership", "Engineering"]
---

A year ago I could look at our velocity and feel like I understood it. The team's output
was a fairly steady function of headcount and focus, and my job as the person leaning
into leadership was to protect both. Then the floor moved. The team started shipping
noticeably more, and I realized most of my intuitions about *how work happens* were
built for a world that had just ended.

This is me trying to describe the new shape of it, while it's still strange enough to
see clearly.

## Output went up; the constraint moved

The obvious change is that we ship faster. The non-obvious change is that speed stopped
being the binding constraint, so optimizing for it stopped helping. We can produce
changes faster than we can confidently *understand* them, and understanding is now the
scarce resource.

You feel it first in code review. When generating a large change is cheap but reviewing
it well is not, the queue backs up at the one step that still runs at human speed. We
didn't have a velocity problem anymore. We had a review-throughput problem wearing a
velocity problem's clothes, and you can't prompt your way out of that one.

## Estimation got weird

Estimates used to be anchored to how long the building would take. Now the building is
often the fast part, and the time lives in the things AI doesn't shorten: agreeing on
what we actually want, reviewing carefully, integrating safely, and being sure.

So I've stopped letting the team estimate the happy-path generation and started asking
about the parts that didn't get cheaper. How long to be confident this is right? How
long to understand it well enough to own it? Those numbers barely moved, and they're
most of the real cost now.

> The work that got faster wasn't the work that was ever the bottleneck. The bottleneck
> just got lonelier.

## On-call for code nobody fully wrote

Here's the one that keeps me up. It's now entirely possible for production to be running
code that no single person on the team deeply understands — generated, lightly reviewed,
shipped, forgotten. It works right up until the incident, and then someone is staring at
a page at 2am trying to build, live, the mental model that never got built in the first
place.

So a real part of leading now is insisting on understanding as a shipping requirement,
not a nice-to-have. If we're going to own it on-call, someone owns it in their head
first. That's a cultural line I have to hold deliberately, because the tools make it so
easy to cross without noticing.

## What I actually optimize for now

If velocity isn't the lever, what is? Three things keep surfacing.

Judgment density — how much real engineering discernment is present per change, because
[that's the scarce skill now](/home/blog/taste-is-the-bottleneck/) and AI multiplies it
in both directions. Review capacity — treating careful review as first-class work and
staffing it like we mean it, instead of as an afterthought tax on shipping. And shared
understanding — actively defending the team's collective mental model of the system,
because the tools quietly erode it and nothing warns you until it's gone.

None of those are new ideas. They just went from "good practices" to "the actual job,"
and the slack that used to hide their absence is gone.

## The parts that didn't get easier

For all the change, the core of leaning into leadership feels stubbornly the same. AI
didn't make it easier to give honest feedback, to grow people on purpose — which is
[its own harder problem now](/home/blog/mentoring-in-the-ai-era/) — to navigate a tense
disagreement, or to keep a team pointed at something that matters. The human parts of
the job didn't get automated. If anything they got more load-bearing, because they're
the parts holding everything together while the technical ground shifts underneath.

**The tools changed what my team produces. They didn't change what my team needs from
me.** Most of leadership turned out to live in the half that AI doesn't touch — and I'm
oddly reassured by that.

I'm still early in working out the new defaults, and I'm sure some of these will look
naive in a year. If you're leading through the same shift, I'd genuinely like to hear
what's holding and what's breaking for you.
