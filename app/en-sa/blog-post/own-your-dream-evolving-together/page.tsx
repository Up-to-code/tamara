import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-own-your-dream-evolving-together-header.html';
import body from '@/components/exact/en-sa-blog-post-own-your-dream-evolving-together-body.html';
import footer from '@/components/exact/en-sa-blog-post-own-your-dream-evolving-together-footer.html';
import inline from '@/components/exact/en-sa-blog-post-own-your-dream-evolving-together.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
