import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import GalleryIndex from "@/components/Gallery";
import { GalleryTemData } from '@/data/gallery';
import BoxText from '@/components/Gallery/BoxText';
import Layout from '@/components/layout';

interface ImageData {
    id: string;
    number: string;
    src: string;
    createdAt: string;
    updatedAt: string;
    postProfileID: string;
}

interface Payment {
    id: string;
    amount: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    postProfileID: string;
}

interface Profile {
    id: string;
    name: string;
    caption: string;
    facebook: string;
    instagram: string;
    line: string;
    galleryTemplate: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
    deletedBy: null | string;
    ImageData: ImageData[];
    Payment: Payment[];
}

const ListPage: React.FC = () => {
    const router = useRouter();
    const profileId = router.query.id;
    const [profile, setProfile] = useState<Profile | null>(null);
    const [imageCount, setImageCount] = useState(0);
    const [selectedImages, setSelectedImages] = useState<string[]>(Array(GalleryTemData[0].imglist.length).fill(""));

    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const [isLandscape, setIsLandscape] = useState<boolean>(false);
    const [dynamicStyle, setDynamicStyle] = useState<React.CSSProperties>({});

    const updateImageCount = (count: number) => {
        setImageCount(count);
    };

    useEffect(() => {
        const checkScreenOrientation = () => {
            if (typeof window !== 'undefined') {
                setIsLargeScreen(window.innerWidth > 1024);
                setIsLandscape(window.innerHeight < window.innerWidth);
            }
        };
        checkScreenOrientation();
        window.addEventListener('resize', checkScreenOrientation);
        return () => window.removeEventListener('resize', checkScreenOrientation);
    }, []);

    useEffect(() => {
        if (isLargeScreen && isLandscape) {
            setDynamicStyle({ height: 'calc(100vh - 180px - 0.25rem)' });
        } else {
            setDynamicStyle({ height: 'max-content' });
        }
    }, [isLargeScreen, isLandscape]);

    useEffect(() => {
        const fetchProfileData = async () => {
            if (router.isReady && typeof profileId === 'string') {
                try {
                    const response = await fetch(`/api/profiledata/poststory/${profileId}`);
                    const data: Profile | null = await response.json();

                    if (!data) {
                        router.push('/dashboard');
                        return;
                    }
                    setProfile(data);
                } catch (error) {
                    console.error('An error occurred while fetching the profile:', error);
                }
            }
        };

        fetchProfileData();
    }, [router.isReady, profileId]);

    return (
        <Layout>
            <div className='m-auto flex h-full flex-wrap lg:flex-nowrap justify-center '>
                <div className='w-full h-max md:max-md:h-screen lg:h-screen py-2 px-1 md:max-md:w-[70%] lg:w-[70%] flex justify-center' >
                    {profile && (
                        <div className={`relative aspect-[3/2] `} style={dynamicStyle}>
                            <GalleryIndex
                                mode={'view'}
                                selectTem={profile.galleryTemplate}
                                selectedImages={profile?.ImageData?.map(image => image.src)}
                                updateSelectedImages={setSelectedImages}
                                updateImageCount={updateImageCount}
                            />
                            < div className={` absolute top-full w-full`} style={{ top: "calc(100% + 0.5rem)" }}>
                                <BoxText data={profile} />
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </Layout >
    );
}
export default ListPage;