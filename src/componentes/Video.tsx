export default function Video() {
    return (
        <>
            <div className='w-full bg-black p-6'>
                <div className='grid grid-cols-2 max-md:grid-cols-1 gap-6'>
                    <div>
                        <iframe
                            className='w-full aspect-video'
                            src="https://www.youtube.com/embed/DalAeqogMGk?si=aKMdUP5Dfya5yV_8"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        >

                        </iframe>
                    </div>
                    <div>
                        <iframe
                            className='w-full aspect-video'
                            src="https://www.youtube.com/embed/k9gqEUPWOX4?si=z0-Gurnb2yG3LJ_G"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}