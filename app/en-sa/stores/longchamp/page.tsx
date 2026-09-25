import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-longchamp-header.html';
import body from '@/components/exact/en-sa-stores-longchamp-body.html';
import footer from '@/components/exact/en-sa-stores-longchamp-footer.html';
import inline from '@/components/exact/en-sa-stores-longchamp.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
