"use client"

export default function Video(){
    return(
        <div className="flex flex-col items-center gap-8">
            <video 
            src="http://assets.graphy.app/video/6cjvpWbI3Lt7YvG0PpReD9JX98.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full"
            />   
        </div>
        
    )
    
}