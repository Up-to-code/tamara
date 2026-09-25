import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-tamara-secures-up-to-2-4-billion-dollar-facility-header.html';
import body from '@/components/exact/en-sa-blog-post-tamara-secures-up-to-2-4-billion-dollar-facility-body.html';
import footer from '@/components/exact/en-sa-blog-post-tamara-secures-up-to-2-4-billion-dollar-facility-footer.html';
import inline from '@/components/exact/en-sa-blog-post-tamara-secures-up-to-2-4-billion-dollar-facility.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
