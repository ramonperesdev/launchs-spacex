interface ILaunchData {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  launch_site: { site_name: string };
  is_tentative: boolean;
  details: string | null;
  rocket: {
    rocket_name: string;
    rocket_type: string;
    rocket: { company: string; country: string; description: string };
  };
  launch_success: boolean | null;
  links: { video_link: string | null; wikipedia: string | null };
}

export type { ILaunchData };
