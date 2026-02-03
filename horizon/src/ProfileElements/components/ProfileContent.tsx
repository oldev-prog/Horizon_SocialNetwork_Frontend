import { PostsLayout } from "../../PostElements /PostContent /PostsLayout.tsx";


export function ProfileContent() {
    return (
        <div className="profile_content">
            <PostsLayout post_content="Occupy Mars!                                                                                                                                                 1. The Atmospheric Pressure Paradox
                The most common idea for terraforming is melting the polar ice caps to release CO
                2
                ​
                 . However, a 2018 study by NASA (Jakosky et al.) concluded that Mars simply doesn't have enough CO
                2
                ​
                 to create a greenhouse effect sufficient to warm the planet.

                The Reality: Even if we vaporized every bit of dust and ice on the surface, the atmospheric pressure would only reach about 7% of Earth's sea-level pressure. You would still need a pressure suit to keep your blood from boiling.

                The Fix: We would have to import gases (like nitrogen or fluorine-based super-greenhouse gases) from the outer solar system—a logistical nightmare.

                2. The Missing Magnetosphere
                Mars lost its primary atmosphere because it lacks a global magnetic field. Without it, the solar wind acts like a sandblaster, stripping away the upper atmosphere.

                Proposed Solution: Placing a 1-Tesla magnetic dipole shield at the L1 Lagrange point between Mars and the Sun.

                The Critique: While mathematically sound, the scale of building and maintaining a planetary-scale electromagnet in deep space is currently pure science fiction, requiring energy levels we cannot yet generate.

                3. The 'Toxic Soil' Problem
                Martian regolith (soil) is rich in perchlorates—salts that are toxic to humans and plants. They interfere with thyroid function and make the dust a biohazard.

                The Challenge: You cannot simply plant 'Martian potatoes' like in the movies. Every square meter of soil would need to be chemically treated or 'washed' before it could support Earth-based biology.

                4. The 24.6-Hour Synchronization
                One of the few genuine advantages is the Sol (Martian day). Mars rotates once every 24 hours and 37 minutes.

                The Benefit: This is close enough to Earth’s circadian rhythm that humans and plants wouldn't suffer the biological 'jet lag' that would occur on the Moon (where a 'day' lasts 28 Earth days)."
            media_path="../public/Mars.png"/>
            <PostsLayout post_content="Happy New Year!" />
            <PostsLayout post_content="God bless America!" />
        </div>
    );
}