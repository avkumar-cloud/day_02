"use client"
import { BlogHero } from "@/components/Blogs/TopPage";
import Navbar from "../../components/Blogs/Navbar";
import BlogFeatureCard from "@/components/Blogs/BlogCard";
import Footer from "@/components/Blogs/Footer";

export default function BlogPage(){
    return(
        <div className="bg-black text-white overflow-hidden">
            <Navbar/>
            <BlogHero/>
            <BlogFeatureCard 
            mainUrl="https://framerusercontent.com/images/DfJAJKp40JhCTRvB31BHVg84Y.png?width=6400&height=3600"
            picUrl="https://framerusercontent.com/images/iRUoLzPVRiC8pAZZiSomiWPC3k4.png" 
            title="Interactive Data Visualization Examples: How to Move Beyond Static Charts"
            date="May 1, 2025"
            post="Senior Product Designer"
            name="Rachael Grocott"
            />
            <BlogFeatureCard 
            mainUrl="https://framerusercontent.com/images/2GvByQigCunhmADgH8m8MjNaQo.png?width=9600&height=5400"
            picUrl="https://framerusercontent.com/images/iRUoLzPVRiC8pAZZiSomiWPC3k4.png" 
            title="How to Copy and Paste Charts 5x Quicker (that Look Prettier Too)"
            date="Oct 3, 2025"
            post="Senior Product Designer"
            name="Rachael Grocott"
            /> 
            <BlogFeatureCard 
            mainUrl="https://framerusercontent.com/images/cqI4oTsVMyYPjBEaX8n7z5KUOjs.png?width=6400&height=3600"
            picUrl="https://framerusercontent.com/images/hMvU79F95Uvytu1Cz0Re4PHdSjo.jpeg" 
            title="The Best Data Storytelling Tools in 2025 (Quick Reference Guide)"
            date="May 20, 2025"
            post="Co-founder & CEO"
            name="Andrey Vinitsky"
            /> 
            <BlogFeatureCard 
            mainUrl="https://framerusercontent.com/images/1UyaBRkAnMTv4Edl7K4dVTHOtC4.png?width=9542&height=5367"
            picUrl="https://framerusercontent.com/images/Sj6sYiHKo0zi2VgS2K2YM87qI4Y.jpg" 
            title="How to Make a Chart Look Attractive (Proven Techniques)"
            date="May 1, 2025"
            post="Head of Product"
            name="Andrew Ramsay"
            /> 
            <BlogFeatureCard 
            mainUrl="https://framerusercontent.com/images/fCLzETyPGAqAwhJi6jz4lbkXY.png?width=2118&height=1192"
            picUrl="https://framerusercontent.com/images/iRUoLzPVRiC8pAZZiSomiWPC3k4.png" 
            title="Designing Graphy's new hybrid AI interface"
            date="April 15, 2025"
            post="Senior Product Designer"
            name="Rachael Grocott"
            /> 
            <BlogFeatureCard 
            mainUrl="https://framerusercontent.com/images/CyZ935yYlU6yU9AXcFecZqrcFY.png?width=6400&height=3600"
            picUrl="https://framerusercontent.com/images/iRUoLzPVRiC8pAZZiSomiWPC3k4.png" 
            title="How to Make a Heatmap in Excel (or Even Prettier with Graphy)"
            date="April 7, 2025"
            post="Senior Product Designer"
            name="Rachael Grocott"
            /> 
            <BlogFeatureCard 
            mainUrl="https://framerusercontent.com/images/ohBwtYczsFdDTsUJXKiw3QXHf4.png?width=6400&height=3600"
            picUrl="https://framerusercontent.com/images/hMvU79F95Uvytu1Cz0Re4PHdSjo.jpeg" 
            title="How to do Data StoryTelling"
            date="March 6, 2025"
            post="Co-founder & CEO"
            name="Andrey Vinitsky"
            /> 
            <BlogFeatureCard 
            mainUrl="https://framerusercontent.com/images/pFMMW5wz0STeETWepMj2pmSa7Eo.png?width=9600&height=5400"
            picUrl="https://framerusercontent.com/images/Sj6sYiHKo0zi2VgS2K2YM87qI4Y.jpg" 
            title="How to Add a Graph in Notion (The Most Professional-Looking Way)"
            date="March 3, 2025"
            post="Head of Product"
            name="Andrew Ramsay"
            /> 
            <BlogFeatureCard 
            mainUrl="https://framerusercontent.com/images/G6HScp75IeYlCXdW1YyFyoIxBA.png?width=6400&height=3600"
            picUrl="https://framerusercontent.com/images/hMvU79F95Uvytu1Cz0Re4PHdSjo.jpeg" 
            title="4 examples of data Storytelling with graphs"
            date="Feb 17, 2025"
            post="Co-founder & CEO"
            name="Andrey Vinitsky"
            /> 
            <BlogFeatureCard 
            mainUrl="https://framerusercontent.com/images/BwvC0lxxB0MotYSLoRBNfwL28w.jpeg?width=1200&height=600"
            picUrl="https://framerusercontent.com/images/hMvU79F95Uvytu1Cz0Re4PHdSjo.jpeg" 
            title="How we got 50,000 users in 10 months (and how you can too)."
            date="April 16, 2024"
            post="Co-founder & CEO"
            name="Andrey vinitsky"
            /> 
            <BlogFeatureCard 
            mainUrl="https://framerusercontent.com/images/3hEIXLXcxyDwNfy0bB0boTch39k.png?width=4800&height=2700"
            picUrl="https://framerusercontent.com/images/hMvU79F95Uvytu1Cz0Re4PHdSjo.jpeg" 
            title="Gated vs Ungated products. Learnings from our journey."
            date="Feb 23, 2024"
            post="Co-founder & CEO"
            name="Andrey Vinitsky"
            /> 
            <BlogFeatureCard 
            mainUrl="https://framerusercontent.com/images/nF300Huq4s6XOmXuuLeMK1up8.png?width=4800&height=2700"
            picUrl="https://framerusercontent.com/images/hMvU79F95Uvytu1Cz0Re4PHdSjo.jpeg" 
            title="Looking back after a pivot"
            date="Feb 16, 2024"
            post="Co-founder & CEO"
            name="Andrey Vinitsky"
            /> 
            <Footer/>
        </div>
        
    )
}