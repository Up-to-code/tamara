import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-tamara-400m-financing-goldman-sachs-shorooq-header.html';
import body from '@/components/exact/en-sa-blog-post-tamara-400m-financing-goldman-sachs-shorooq-body.html';
import footer from '@/components/exact/en-sa-blog-post-tamara-400m-financing-goldman-sachs-shorooq-footer.html';
import inline from '@/components/exact/en-sa-blog-post-tamara-400m-financing-goldman-sachs-shorooq.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
