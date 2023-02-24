import React from "react";
import Byline from "./Byline";
import { ArticleHeading as H } from "./ArticleHeading";
import { ArticleImage as Img } from "./ArticleImage";
import { ArticleParagraph as P } from "./ArticleParagraph";

export default function Article(props) {
  const { title, subtitle, byline, content } = props;
  return (
    <article className="">
      <header className="mb-10">
        <Byline {...byline} />
        <h2 className="font-sans font-bold text-4xl">
          {title}
          <br />
          <span className="font-sans text-2xl text-dark-grey font-light inline-block">
            {subtitle}
          </span>
        </h2>
      </header>
      <Img
        src="amazon-river.jpg"
        alt="river in the forest"
        credits={
          <>
            Photo by{" "}
            <a
              className="underline"
              href="https://unsplash.com/@ivoprod?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Ivars Utināns
            </a>{" "}
            on{" "}
            <a
              className="underline"
              href="https://unsplash.com/photos/vkQgb1lZZPQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </a>
          </>
        }
      />
      <P>
        <span className="bg-light-green">
          Here is a fun fact to stick in the back of your mind for trivia night
          or to use as an interesting ice breaker: the Amazon River has no
          bridges.
        </span>{" "}
        None. Zero. Zilch. That is in spite of the fact that the Amazon is 4,345
        miles long.
      </P>
      <P>
        The Amazon has a river basin that covers 2.7 million square miles. It
        has the highest flow and discharge rates out of any river on Earth. It
        runs through multiple countries and dumps into the Atlantic Ocean. In
        all of that there is not a single bridge that crosses the river at any
        point. You cannot drive over the Amazon River, even if you wanted to.
      </P>
      <P>
        Why is it that the Amazon has no bridges when other smaller rivers have
        dozens or even hundreds?
      </P>
      <H>Geography and Economics</H>
      <br /> {/* random space? */}
      <Img
        src="amazon-river-map.png"
        alt="Map of the Amazon River"
        credits={
          <>
            Amazon River{" "}
            <a href="https://en.wikipedia.org/wiki/File:Amazonrivermap.svg">
              (Wikipedia)
            </a>
          </>
        }
      />
      <P>
        The Amazon River is one of the most remote rivers on Earth. It plunges
        from a source that is nestle high in the mountains at nearly 18,000 feet
        and then runs through one of the largest and thickest jungles found
        anywhere. The result is, there are not very many paved modern roads that
        run along the Amazon.
      </P>
      <P>
        In fact, if you take a quick glance at the map, there are only a handful
        of towns and cities that are even large enough to register that are
        located on the banks of the Amazon.
      </P>
      <P>
        So the Amazon is remote, so are a lot of other rivers. Why not just one
        bridge? A single bridge.
      </P>
      <P>
        The economics just don't make sense. First, anyone living along the
        Amazon has an established way to cross the river already. Locals use
        boats, rafts and barges to navigate the river and cross the water. Some
        of these river crossings have been in use for decades or even centuries.
        Many locals do not see a bridge as a major upgrade over established
        river crossings that work just fine.
      </P>
      <P>
        Second, since there are no major roads around the Amazon, getting
        material out to build a modern bridge would be time consuming and
        expensive. Sure, it could be done but is the payoff worth it? In order
        to recoup the money the bridge would likely have to be tolled and few
        people would choose a toll bridge over other forms of river crossings.
      </P>
      <P>
        Lastly, there simply is not an appetite for this kind of infrastructure
        in the rain forest. Construction would be noisy and disruptive. Locals
        don't see a benefit in it. The government would lose money on funding a
        bridge. Private investors wouldn't be able to recoup their costs without
        tolls or concessions. Large projects in hostile environments such as the
        Amazon usually tend to bog down, run over in terms of cost and can be
        extremely dangerous.
      </P>
      <P>
        The Amazon is wet, filled with bugs, critters and disease and has
        extremely soft marshy soil. Any bridge would need to have deep
        foundations and have very large pilings driven far into the river bed in
        order to be effective. All of that adds up to time, money and material
        and none of those things are easy to manage in the Amazon.
      </P>
      <H>Current and Future Projects</H>
      <P>
        There are a couple of bridges that span Amazon tributary rivers. One
        such bridge is located in Manaus, the largest city along the Amazon. But
        the bridge doesn't cross the main expanse of the river. There is another
        bridge crossing a large Amazon tributary in Peru.
      </P>
      <P>
        President Bolsonaro of Brazil has repeatedly said he wants to build a
        bridge over the Amazon but detractors say it would be for his legacy and
        serve no real purpose. No progress has been made on the Brazilian Amazon
        bridge proposal.
      </P>
      <P>
        In fact, every bridge proposal targeting the Amazon has stalled and
        gotten nowhere. No one has even attempted to break ground which shows
        how stiff the headwinds are to such a project. Many bridges has been
        dreamed up but so far none have become reality.
      </P>
      <P>
        It is odd to think that in 2022, over a hundred years since people dug
        out the Panama and Suez Canals, no one has managed to build a bridge
        across the Amazon.
      </P>
      <H>Conclusion</H>
      <P>Resistance to bridging the Amazon can be summed up in this way.</P>
      <ol className="list-inside list-decimal mb-8 font-serif">
        <li className="text-base font-bold mb-2">Too remote</li>
        <li className="text-base font-bold mb-2">Too expensive</li>
        <li className="text-base font-bold">No public support</li>
      </ol>
      <P>And that is it.</P>
      <P>
        These three factors continue to work in tandem to prevent any bridges
        from becoming a reality. In the meantime, the Amazon continues to flow
        for thousands of miles largely undisturbed by human infrastructure.
      </P>
    </article>
  );
}
